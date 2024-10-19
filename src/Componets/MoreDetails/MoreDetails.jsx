import { useLoaderData } from "react-router-dom";


const MoreDetails = () => {

    const data = useLoaderData() ;
    console.log(data);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">This more details </h1>
        </div>
    );
};

export default MoreDetails;