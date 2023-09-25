import { NavLink } from "react-router-dom";
import './Navbar.css'
import logoImage from './Logo/Logo.png'



const Navbar = () => {
    const links = <>
    <li><NavLink 
 to="/" className=" hover:text-red-500 hover:underline">Home</NavLink></li>
    <li><NavLink to="/Donation" className=" hover:text-red-500 hover:underline">Donation</NavLink></li>
    
    <li><NavLink to="/statistics" className=" hover:text-red-500 hover:underline">Statistics</NavLink></li>
    
</>

    return (
        <div className="font-inter">
             <div className=" md:flex md:justify-evenly navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">Donation Campaign</a> */}
                <div><img className="w-[200px] h[200px]" src={logoImage} alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            
        </div>

        </div>
    );
};

export default Navbar;