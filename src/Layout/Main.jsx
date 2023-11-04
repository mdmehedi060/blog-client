import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;