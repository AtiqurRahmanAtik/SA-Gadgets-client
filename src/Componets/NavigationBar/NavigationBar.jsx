import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const NavigationBar = () => {

    const {user,userSignOut} = useContext(authContext);
    console.log(user);

    const handleSingOut = () =>{
      userSignOut();
    }


    const links = <>
       <NavLink to='/'>   <li className="text-2xl font-medium"><a>Home </a></li></NavLink>
           <NavLink to='/about'>  <li className="text-2xl font-medium"><a>About</a></li></NavLink>
         
            <li className="text-2xl font-medium"><a>Contact</a></li>
    </>;



    return (
      
        <div className="navbar bg-orange-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             
                {links}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           

            {links}
          </ul>
        </div>
        <div className="navbar-end">
      

        
        {/* login Button */}
     <div>
      {
        !user?   <Link to='/login'>   <a className="btn bg-blue-500">Login</a></Link>: 

        <div className="dropdown dropdown-end mx-auto">
             <div>
            <h1>{user.displayName}</h1>
          </div>
        <div tabIndex={0}  role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full ">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoURL} />
          </div>

       
        </div>
  
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
            
            </a>
          </li>
          <li><a>Settings</a></li>
          <li> <button onClick={handleSingOut}>Logout</button></li>
        </ul>
      </div>
      }
     </div>
     
        </div>
      </div>
    );
};

export default NavigationBar;