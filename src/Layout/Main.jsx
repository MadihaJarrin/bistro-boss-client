import { Outlet } from "react-router-dom";
import Footer from "../shared/Foooter/Footer";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;