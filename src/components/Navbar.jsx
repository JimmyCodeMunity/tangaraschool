import React, { useState } from "react";
import { navlinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import * as Icon from "react-feather";

const Navbar = ({ navcolor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route path
    console.log("path",location.pathname)

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${navcolor ? navcolor.navcolor : "bg-black"} w-full sm:py-6 py-6 sm:px-16 px-6 max-w-7xl mx-auto`}>
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    <a href="/" className="flex flex-row items-center space-x-3">
                        <img src="../images/logo.png" className="h-16 w-16" alt="" />
                        <h1 className="text-xl font-semibold text-white">Tangara School</h1>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex space-x-4 items-center">
                        {navlinks.map((navitem) => (
                            <li key={navitem.path} className={`${location.pathname === navitem.path ? "text-green-500" : "text-white"} hover:text-green-500`}>
                                <Link to={navitem.path}>{navitem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden block">
                    {isOpen ? <Icon.X onClick={handleMenu} color="white" size={30} /> : <Icon.Menu onClick={handleMenu} color="white" size={30} />}
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-white absolute top-32 w-[200px] right-14 z-10 rounded-sm p-3">
                        <ul className="flex flex-col space-y-2 items-start">
                            {navlinks.map((navitem) => (
                                <li key={navitem.path} className={`${location.pathname === navitem.path ? "text-green-500" : "text-black"} text-sm`}>
                                    <Link to={navitem.path} onClick={() => setIsOpen(false)}>{navitem.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="hidden md:block">
                    <a href="/login">
                        <button className="bg-white group flex items-center space-x-2 p-2 text-black rounded-full border border-1 border-black hover:bg-green-500 hover:text-white hover:border-green-500">
                            Sign In
                            <Icon.ArrowRight className="text-black group-hover:text-white" size={20} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
