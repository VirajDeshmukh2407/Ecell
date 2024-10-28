import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ecellLogo from "../images/ecell_logo.png";
import iicLogo from "../images/IIC_logo.png";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="z-30 bg-opacity-90 text-gray-200">
      <header className=" w-full flex justify-between items-center p-4 z-50">
        {/* Left logo */}
        <img
          src={ecellLogo}
          alt="Ecell Logo"
          className="w-12 h-auto sm:w-[90px] sm:h-auto object-cover"
        />

        {/* Right logo */}
        <div className="flex flex-col items-center">
          <img
            src={iicLogo}
            alt="IIC Logo"
            className="w-14 h-auto sm:w-[120px] sm:h-auto object-cover"
          />

          {/* Sidebar button (only on small screens) */}
          <div className="sm:hidden mt-4">
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-200 w-6 h-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </header>

      {/* Sidebar or Dropdown menu for Desktop */}
      <nav className="hidden md:flex justify-center space-x-8 text-lg font-normal">
        <div className="relative group">
          <span className="hover:text-gray-300">Home</span>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 text-white w-[150px] py-2 rounded-md">
            <a href="#" className="hover:bg-gray-600 py-1 px-4">
              Sublink 1
            </a>
            <a href="#" className="hover:bg-gray-600 py-1 px-4">
              Sublink 2
            </a>
            <a href="#" className="hover:bg-gray-600 py-1 px-4">
              Sublink 3
            </a>
          </div>
        </div>

        <div className="relative group z-21">
          <span className="hover:cursor-pointer hover:text-gray-300">
            About
          </span>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 text-white w-[180px] py-2 rounded-md">
            <a href="#" className="hover:bg-gray-600 py-4 px-4">
              Sublink A
            </a>
            <a href="#" className="hover:bg-gray-600 py-4 px-4">
              Sublink B
            </a>
            <a href="#" className="hover:bg-gray-600 py-4 px-4">
              Sublink C
            </a>
          </div>
        </div>

        <div className="relative group ">
          <span className="hover:cursor-pointer hover:text-gray-300">
            Events
          </span>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 text-white w-[180px] py-2 rounded-md z-21">
            <a href="#" className="hover:bg-gray-600 py-4 px-4">
              Event 1
            </a>
            <a href="#" className="hover:bg-gray-600 py-4 px-4">
              Event 2
            </a>
          </div>
        </div>

        <div className="relative group ">
          <span className="hover:cursor-pointer hover:text-gray-300">
            Contact
          </span>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 text-white w-[150px] py-2 rounded-md z-21">
            <a href="#" className="hover:bg-gray-600 py-1 px-4">
              Email Us
            </a>
            <a href="#" className="hover:bg-gray-600 py-1 px-4">
              Call Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
