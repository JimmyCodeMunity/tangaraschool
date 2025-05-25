import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../constants";
import * as Icon from "react-feather";

const StickyNavbar = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full bg-black shadow-md z-50"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <Link to="/" className="text-white flex items-center text-lg font-semibold">
        <img src="../images/logo.png" className="h-16 w-16" alt="" />
          Tangara Schools
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navlinks.map((navitem) => (
            <li key={navitem.path}>
              <Link
                to={navitem.path}
                className={`${
                  location.pathname === navitem.path ? "text-green-500" : "text-white"
                } hover:text-green-500`}
              >
                {navitem.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In Button (hidden on mobile) */}
        <Link to="/login" className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-green-500 hover:text-white">
            Sign In
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <Icon.X size={28} color="white" onClick={toggleMenu} />
          ) : (
            <Icon.Menu size={28} color="white" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {navlinks.map((navitem) => (
              <li key={navitem.path}>
                <Link
                  to={navitem.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    location.pathname === navitem.path ? "text-green-500" : "text-black"
                  }`}
                >
                  {navitem.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-black text-white py-2 rounded-full hover:bg-green-500">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default StickyNavbar;
