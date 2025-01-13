import React from "react";
import { BackgroundBeams } from "../components/BackgroundBeams.jsx";
import CardSpotlight from "../components/Card-Spotlight";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="relative overflow-hidden p-12 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div
          className="relative z-10 lg:w-1/2 text-center lg:text-left"
          id="about"
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-glow text-gray-300">
            Who Are We?
          </h1>
          <p className="text-lg mb-6 text-white sm:text-balance poppins-regular">
            IIC ECELL is a non-profit organization run by the students of SKNCOE
            Pune. We are dedicated to fostering a culture of entrepreneurship
            and innovation on campus. Our mission is to empower aspiring
            entrepreneurs, provide resources to startups, and bring the spirit
            of entrepreneurship into reality. Through workshops, mentorship, and
            networking opportunities, we aim to bridge the gap between ideas and
            execution.
          </p>

          {/* <Link
            to="/whatwedo"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000003,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-11"
          >
            Learn More About E-CELL IIC
          </Link> */}
        </div>
        {/* Image Section */}
        <div className="w-full relative z-10 lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="./images/IIC Ecell_transparent logo.png"
            alt="E-Cell IIC Logo"
            className="w-3/4 lg:w-200 rounded-lg"
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
