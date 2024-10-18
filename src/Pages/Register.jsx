import { Link } from "react-router-dom";
import photo from "../assets/RegisterForm.jpg";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Register = () => {

    const {singUp} = useContext(authContext);


    const handleRegister = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const  registerUser= {email,password};
        console.log(registerUser);

        singUp(email,password)
        .then(result=>{
            const user= result.user;
            
            if(user){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Registration",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            console.log(user);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return (
        <div>

<h1 className="text-5xl text-center font-bold my-5">Register now!</h1>
           
<div className="hero bg-base-200 ">

<div className="hero-content w-full flex-col lg:flex-row">

  <div className="w-full lg:w-2/4 text-center lg:text-left">
    
   
   <div className="my-7">
      <img className="w-[580px]"  src={photo} alt="" />
   </div>
  </div>


{/* form section */}

  <div className="w-full lg:w-2/4  card bg-base-100   shrink-0 shadow-2xl">
        
    <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
      </div>

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
      
    <button className="lg:w-80 btn btn-primary text-2xl">Register</button>
      </div>
    </form>

    <div className="my-5">
      <h1 className="text-xl lg:text-2xl text-center font-medium capitalize">have an account ? please 
     
     <Link to='/login'>  <button className="btn btn-link text-xl lg:text-2xl ">Login</button></Link>
      </h1>
    </div>
    
  </div>


</div>
</div>
 
        </div>
    );
};

export default Register;