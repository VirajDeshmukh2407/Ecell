import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaBars } from "react-icons/fa";
import ScrollButton from "../components/ScrollButton";
import FloatingSidebar from "../components/FloatingSidebar";
import About from "../pages/About";
import Events from "./Events";
import CoreTeam from "./Team";
import Faculty from "./Faculty";
import Contact from "./Contact";
import Alumini from "./Alumini";
import Footer from "./Footer";
import AboutEcell from "../sub-pages/About-Ecell";
import Line1 from "../components/svg/Line1";
function HomePage() {
  const phrases = ["DREAM.", "DREAM. DISCOVER.", "DREAM. DISCOVER. DISRUPT."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 700);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <div
        className="relative flex flex-col h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${"images/bg.jpg"})` }}
      >
        {/* Navbar for medium and larger screens */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow items-center text-center px-4 py-8 z-20 mt-12">
          <h1 className="text-gray-300 text-[18px] sm:text-[25px] font-normal transition-opacity duration-1000 ease-in-out mt-10 poppins-semibold">
            {phrases[index]}
          </h1>
          <div className="font-extrabold text-gray-300 text-[28px] sm:text-[55px] leading-[normal] mt-16 sm:mt-4 poppins-bold">
            IIC
          </div>
          <span className="text-[22px] sm:text-[40px] font-extrabold text-gray-300 mt-6 poppins-bold">
            {" "}
            &amp;
          </span>
          <div className="font-extrabold text-gray-300 text-[28px] sm:text-[50px] leading-[normal] mt-4 z-30 poppins-bold">
            Entrepreneurship Cell
          </div>
          <div className="text-gray-300 font-extrabold text-[28px] sm:text-[50px] leading-[normal] mt-10 z-30 poppins-bold">
            SKNCOE
          </div>
        </div>

        <FloatingSidebar />
        <ScrollButton />
      </div>
      <About></About>
      <AboutEcell></AboutEcell>
      <div className="bg-black flex items-center justify-center w-full my-7 py-5">
        <div className="w-1/2"><Line1></Line1></div>
      </div>
      <Events></Events>
      <Alumini></Alumini>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
