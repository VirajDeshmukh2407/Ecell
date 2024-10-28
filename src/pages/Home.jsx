import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import bg from "../images/bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/Card.jsx";
import ScrollButton from "../components/ScrollButton.jsx";
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
    }, 700);

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
      <Navbar
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
      />
      <div className="flex flex-col flex-grow items-center text-center px-4 py-8 z-20">
        <h1 className="text-gray-300 text-[18px] sm:text-[25px] font-normal transition-opacity duration-1000 ease-in-out mt-8">
          {phrases[index]}
        </h1>
        <div className="font-extrabold text-gray-300 text-[28px] sm:text-[55px] leading-[normal] mt-16 sm:mt-4">
          IIC
        </div>
        <span className="text-[22px] sm:text-[40px] font-extrabold text-gray-300 mt-6">
          {" "}
          &amp;
        </span>
        <div className="font-extrabold text-gray-300 text-[28px] sm:text-[50px] leading-[normal] mt-4 z-30">
          Entrepreneurship Cell
        </div>
        <div className="text-gray-300 font-extrabold text-[28px] sm:text-[50px] leading-[normal] mt-10 z-30">
          SKNCOE
        </div>
      </div>

      <div className="flex-grow h-full flex lg:hidden items-center justify-center z-20 sm:block md:hidden">
        <Card />
      </div>

      <ScrollButton />
    </div>
  );
};

export default Home;
