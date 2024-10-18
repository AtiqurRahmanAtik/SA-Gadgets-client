import { Link } from "react-router-dom";
import photo from "../assets/login.jpg";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const {singIn} = useContext(authContext);

    // handleSingIn
    const handleSingIn =(e)=>{
       e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginUser = {email,password};
        console.log(loginUser);

       singIn(email,password)
        .then(result=> {
            
            if(result){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login ",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return (
        <div>

<h1 className="text-5xl text-center font-bold my-5">Login now!</h1>
    
<div className="hero bg-base-200 ">

<div className="hero-content w-full flex-col lg:flex-row">

  <div className="w-full lg:w-2/4 text-center lg:text-left">
 
   
   <div className="my-7">
      <img className="w-[580px]"  src={photo} alt="" />
   </div>
  </div>


{/* form section */}

  <div className="w-full lg:w-2/4  card bg-base-100   shrink-0 shadow-2xl">

    <form onSubmit={handleSingIn} className="card-body">
    

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
      </div>

      <div className="form-control mx-auto mt-6">
      
    <button className="lg:w-80 btn btn-primary text-2xl">Login</button>
      </div>
    </form>

    <div className="my-5">
      <h1 className="text-xl lg:text-2xl text-center font-medium capitalize">Do not  have an account ? please 
     
     <Link to='/register'>  <button className="btn btn-link text-xl lg:text-2xl ">Register</button></Link>
      </h1>
    </div>
    
  </div>
</div>
</div>
        </div>
    );
};

export default Login;