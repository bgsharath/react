import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex m-2 justify-between bg-slate-300">
            <div>
                <img className="w-20 p-2" src="https://www.freeiconspng.com/uploads/logo-design-blank-circle-blue-and-orange-png-2.png" />
            </div>
            <div>
                <ul className="flex items-center m-4">
                    <li className="p-2"><Link to="/">Home</Link></li>
                    <li className="p-2"><Link to="/about">About</Link></li>
                    <li className="p-2">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;