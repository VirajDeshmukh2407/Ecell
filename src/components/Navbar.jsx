import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);


  const toggleEvents = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Desktop and Tablet Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive} className="text-white">
          <Link to="/">
            <MenuItem
              setActive={setActive}
              item="Home"
              className="hover:text-yellow-600"
            />
          </Link>
          <a href="#about" className="text-white hover:text-yellow-600">
            About
          </a>
          <MenuItem setActive={setActive} active={active} item="Events">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <Link to="/econclave">
                <ProductItem
                  title="E-Conclave"
                  src="./thumbnail/Thumbnail1.jpg"
                  description="Flagship event featuring industry leaders, entrepreneurs, and insightful discussions."
                />
              </Link>
              <Link to="/aarambh">
                <ProductItem
                  title="Aarambh"
                  src="./thumbnail/Thumbnail3.jpg"
                  description="Ignite students' entrepreneurial journey through ideation, innovation, and collaboration."
                />
              </Link>
              <Link to="/startupsutra">
                <ProductItem
                  title="Startup Sutra"
                  src="./thumbnail/Thumbnail2.jpg"
                  description="An event blending fun, competition, and education for entrepreneurs."
                />
              </Link>
            </div>
          </MenuItem>
          <Link to="/team">
            <MenuItem setActive={setActive} item="Team" className="hover:text-yellow-600" />
          </Link>
          <Link to="/contacts">
            <MenuItem setActive={setActive} item="Contact" className="hover:text-yellow-600" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <div className="flex justify-end px-4 relative">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none border border-gray-300 rounded-md p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`fixed top-13 right-0 w-64 h-1/2 bg-black text-white shadow-lg p-4 transition-transform duration-300 ease-in-out rounded-lg ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <nav className="mt-10 space-y-4">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-700 "
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={toggleEvents}
              >
                Events <span className="pl-5">▼</span>
              </button>
              {isEventsOpen && (
                <div className="pl-4">
                  <Link
                    to="/econclave"
                    className="block py-2 hover:bg-gray-700"
                    onClick={toggleMobileMenu}
                  >
                    E-Conclave
                  </Link>
                  <Link
                    to="/aarambh"
                    className="block py-2 hover:bg-gray-700"
                    onClick={toggleMobileMenu}
                  >
                    Aarambh
                  </Link>
                  <Link
                    to="/startupsutra"
                    className="block py-2 hover:bg-gray-700"
                    onClick={toggleMobileMenu}
                  >
                    Startup Sutra
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/team"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              Team
            </Link>
            <Link
              to="/contacts"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
