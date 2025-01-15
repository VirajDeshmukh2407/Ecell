import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { HashLoader } from "react-spinners";
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
import Sponsers from "../pages/Sponsers.jsx";
import Line1 from "../components/svg/Line1";
import AOS from "aos";
import "aos/dist/aos.css";
function HomePage() {
  // State to handle loading spinner and text phrases
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const phrases = ["DREAM.", "DREAM. DISCOVER.", "DREAM. DISCOVER. DISRUPT."];

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 700); // Adjust duration as needed
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div>
      {/* Display loading spinner or main content */}
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <HashLoader color="#facc15" size={80} />
        </div>
      ) : (
        <>
          {/* Main Content */}
          <div
            className="relative flex flex-col h-screen bg-cover bg-center"
            style={{ backgroundImage: `url("images/bg.jpg")` }}
          >
            {/* Navbar */}
            <div className="hidden md:block">
              <Navbar />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            {/* Hero Section */}
            <div className="flex flex-col flex-grow items-center text-center px-4 py-8 z-20 mt-12" data-aos="fade-down">
              <h1 className="text-gray-300 text-[21px] sm:text-[25px] font-normal transition-opacity duration-1000 ease-in-out mt-10 poppins-semibold">
                {phrases[index]}
              </h1>
              <div className="font-extrabold text-gray-300 text-[34px] sm:text-[55px] leading-[normal] mt-16 sm:mt-4 poppins-bold">
                IIC
              </div>
              <span className="text-[34px] sm:text-[40px] font-extrabold text-gray-300 mt-6 poppins-bold">
                &amp;
              </span>
              <div className="font-extrabold text-gray-300 text-[31px] sm:text-[50px] leading-[normal] mt-4 z-30 poppins-bold">
                Entrepreneurship Cell
              </div>
              <div className="text-gray-300 font-extrabold text-[34px] sm:text-[50px] leading-[normal] mt-10 z-30 poppins-bold">
                SKNCOE
              </div>
            </div>

            {/* Sidebar and Scroll Button */}
            <FloatingSidebar className="fixed top-20 left-5 sm:hidden" />
            <ScrollButton />
          </div>

          {/* Sections */}
          <About />
          <AboutEcell />
          <div className="bg-black flex items-center justify-center w-full my-7 py-5">
            <div className="w-1/2">
              <Line1 />
            </div>
          </div>
          <Events />
          <Alumini />
          <Sponsers />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;
