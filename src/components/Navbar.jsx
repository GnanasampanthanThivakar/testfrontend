import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png"; // Ensure this path is correct

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        isScrolled ? "py-2 bg-[#290000] shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 heading">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={location.pathname === "/about"}>
              About
            </NavLink>
            <NavLink to="/gallery" isActive={location.pathname === "/gallery"}>
              Gallery
            </NavLink>
            <NavLink to="/video" isActive={location.pathname === "/video"}>
            cinematography
            </NavLink>
            <NavLink to="/contact" isActive={location.pathname === "/contact"}>
              Contact
            </NavLink>
            <a
              href="https://wa.me/94764481734"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-1 bg-[#780000] text-[#FFFAF0] font-medium hover:bg-[#950000] hover:text-[#FFFAF0] transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#290000]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 heading">
              <MobileNavLink to="/" isActive={location.pathname === "/"}>
                Home
              </MobileNavLink>
              <MobileNavLink
                to="/about"
                isActive={location.pathname === "/about"}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                to="/gallery"
                isActive={location.pathname === "/gallery"}
              >
                Gallery
              </MobileNavLink>
              <MobileNavLink
                to="/video"
                isActive={location.pathname === "/video"}
              >
                Services
              </MobileNavLink>
              <MobileNavLink
                to="/contact"
                isActive={location.pathname === "/contact"}
              >
                Contact
              </MobileNavLink>
              <a
                href="https://wa.me/94764481734"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-[#D32F2F] text-[#FFFAF0] hover:bg-[#FF0000] hover:text-[#1A2A40] transition duration-300"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className={`text-[#FFFAF0] px-3 py-2 rounded-md text-sm font-medium transition duration-300 relative group ${
        isActive ? "text-[#FFD700]" : "hover:text-[#FFD700]"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700]"></span>
      )}
    </Link>
  );
}

function MobileNavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
        isActive
          ? "text-[#FFD700] bg-[#290000]"
          : "text-[#FFFAF0] hover:text-[#FFD700] hover:bg-[#290000]"
      }`}
    >
      {children}
    </Link>
  );
}
