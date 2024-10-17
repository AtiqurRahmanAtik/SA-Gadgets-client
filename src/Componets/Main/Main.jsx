import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
          
          <div className="mx-auto container my-11">
          <Outlet></Outlet>
          </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Main;