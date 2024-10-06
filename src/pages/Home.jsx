import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ecell_logo from "../images/ecell_logo.png";
import IIC_logo from "../images/IIC_logo.png";
import bg from "../images/bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/Card.jsx";
const phrases = ["DREAM.", "DREAM. DISCOVER.", "DREAM. DISCOVER. DISRUPT."];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col justify-between bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="flex justify-between items-start w-auto px-8 sm:pt-0 z-20">
        <img
          src={ecell_logo}
          alt="Ecell Logo"
          className="w-[50px] sm:w-[100px] h-10 sm:h-[70px] p-3 object-cover"
        />
        <img
          src={IIC_logo}
          alt="IIC Logo"
          className="w-[70px] sm:w-[200px] h-8 sm:h-[80px] pt-4 object-cover"
        />
      </div>

      <div className="sm:hidden flex justify-end px-9 mt-8 z-20">
        <FontAwesomeIcon
          icon={faBars}
          className="text-gray-200 w-[25px] h-[25px] cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:hidden md:hidden`}
      >
        <div className="md:flex hidden justify-end p-4">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white w-[25px] h-[25px] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <nav className="flex flex-col items-start p-6 space-y-6 text-white text-lg z-50 ease-in-out md:flex">
          <div>
            <span
              className="cursor-pointer hover:text-gray-300"
              onClick={() => toggleDropdown("home")}
            >
              Home
            </span>
            {openDropdown === "home" && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink 1
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink 2
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink 3
                </a>
              </div>
            )}
          </div>

          <div>
            <span
              className="cursor-pointer hover:text-gray-300"
              onClick={() => toggleDropdown("about")}
            >
              About
            </span>
            {openDropdown === "about" && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink A
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink B
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Sublink C
                </a>
              </div>
            )}
          </div>

          <div>
            <span
              className="cursor-pointer hover:text-gray-300"
              onClick={() => toggleDropdown("events")}
            >
              Events
            </span>
            {openDropdown === "events" && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Event 1
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Event 2
                </a>
              </div>
            )}
          </div>

          <div>
            <span
              className="cursor-pointer hover:text-gray-300"
              onClick={() => toggleDropdown("contact")}
            >
              Contact
            </span>
            {openDropdown === "contact" && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Email Us
                </a>
                <a href="#" className="hover:bg-gray-600 py-1 px-4 block">
                  Call Us
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      <nav className="hidden lg:flex justify-center space-x-8 sm:space-x-14 font-normal text-gray-200 text-xl sm:text-xl mb-2 lg:mb-0 z-20">
        <div className="relative group z-21">
          <span className="hover:cursor-pointer hover:text-gray-300">Home</span>
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

      <div className="flex flex-col flex-grow items-center text-center px-4 py-8 z-20">
        <h1 className="text-gray-100 text-[18px] sm:text-[25px] font-normal transition-opacity duration-1000 ease-in-out mt-8">
          {phrases[index]}
        </h1>
        <div className="font-extrabold text-gray-200 text-[28px] sm:text-[55px] leading-[normal] mt-12 sm:mt-4">
          IIC
        </div>
        <span className="text-[22px] sm:text-[40px] font-extrabold text-gray-200 mt-4">
          {" "}
          &amp;
        </span>
        <div className="font-extrabold text-gray-200 text-[28px] sm:text-[50px] leading-[normal] mt-4 z-30">
          Entrepreneurship Cell
        </div>
        <div className="text-gray-200 font-extrabold text-[28px] sm:text-[50px] leading-[normal] mt-8 z-30">
          SKNCOE
        </div>
      </div>

      <div className="flex-grow h-full flex items-center justify-center z-20 sm:hidden">
        <Card />
      </div>
    </div>
  );
};

export default Home;
