import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../Products/Products";




const Home = () => {

    const [ item, setItem] = useState([]);

    // console.log(item);

    useEffect(()=> {
        axios.get('/FakeData.json')
        .then(res=>  setItem(res.data))

    },[]);


    return (
        <div>
              <h1 className="text-3xl font-bold text-center capitalize">our latest product : {item.length} </h1>

            <div className="grid gap-3 gird-cols-1 lg:grid-cols-3 my-9 bg-gray-300 p-5">
                {
                    item.map(item=> <Products key={item.id} item={item}></Products>)
                }
            </div>

        </div>
    );
};

export default Home;