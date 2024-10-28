

import Products from "../Products/Products";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
// import 'animate.min.css';




const Home = () => {

    // const [ item, setItem] = useState([]);
    const item = useLoaderData();
    const {isLoading} = useContext(authContext);

 
    

    // console.log(item);

    // const product = useLoaderData();
    // console.log(product);
    // console.log(item);

    // useEffect(()=> {
    //     axios.get('/FakeData.json')
    //     .then(res=>  setItem(res.data))

    // },[]);


    return (
        <div>
              <h1 className="animate__animated animate__bounce text-3xl font-bold text-center capitalize">our latest product : </h1>


            
 
                 {/* main */}
            <div className="grid gap-3 gird-cols-1 lg:grid-cols-3 my-9 bg-gray-300 p-5">
                {
                    item.map(item=> <Products key={item.id} item={item}></Products>)
                }
            </div>

        </div>
    );
};

export default Home;