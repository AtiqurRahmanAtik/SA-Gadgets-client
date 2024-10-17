import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        
             <div >
      <h1 className="text-red-500 text-3xl text-center">Oops!</h1>
      <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>


      <p className="text-2xl font-bold text-center">
        <i>{error.statusText || error.message}</i>
      </p>


     <div className="text-center">
     <Link to='/'>  <button className="w-2/5 my-11 btn btn-warning text- text-2xl hover:bg-red-500">Warning</button></Link>
     </div>

    </div>
       
    );
};

export default ErrorPage;