import React, { useState, useEffect } from "react";
import bg from "../images/bg.jpg";
import Navbar from "../components/Navbar";
import { FaBars } from "react-icons/fa";
import ScrollButton from "../components/ScrollButton";

function HomePage() {
  const phrases = ["DREAM.", "DREAM. DISCOVER.", "DREAM. DISCOVER. DISRUPT."];
  const [index, setIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 700);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div
      className="relative flex flex-col h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar for medium and larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Sidebar icon for small screens */}
      <div className="absolute top-4 left-4 md:hidden z-30">
        <FaBars
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Sidebar content for small screens */}
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-full bg-gray-800 bg-opacity-90 p-6 z-40">
          <button
            className="text-white mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          <div className="text-white space-y-4">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow items-center text-center px-4 py-8 z-20 mt-12">
        <h1 className="text-gray-300 text-[18px] sm:text-[25px] font-normal transition-opacity duration-1000 ease-in-out mt-10">
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

      <ScrollButton />
    </div>
  );
}

export default HomePage;
