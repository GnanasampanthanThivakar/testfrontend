import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png"; // Make sure this path is correct


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-[#1A2A40] shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
            {/* <span className="ml-2 text-xl font-bold text-[#1A2A40]">SJ Photography</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/Hero">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/book"
              className="px-6 py-2 bg-[#D32F2F] text-[#FFFAF0] rounded-full font-medium hover:bg-[#FF0000] hover:text-[#1A2A40] transition duration-300"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFFAF0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A2A40]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/home">Home</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/gallery">Gallery</MobileNavLink>
              <MobileNavLink to="/services">Services</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <Link
                to="/book"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-[#D32F2F] text-[#FFFAF0] hover:bg-[#FF0000] hover:text-[#1A2A40] transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-[#FFFAF0] hover:text-[#FFD700] px-3 py-2 rounded-md text-sm font-medium transition duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-[#FFFAF0] hover:text-[#FFD700] hover:bg-[#1A2A40] transition duration-300"
    >
      {children}
    </Link>
  );
}