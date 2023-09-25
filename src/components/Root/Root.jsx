import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

import './Root.css'


const Root = () => {
    return (
        <div className="font-inter font-mono">
            <Header></Header>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Root;