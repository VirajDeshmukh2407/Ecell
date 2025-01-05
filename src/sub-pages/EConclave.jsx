import React from "react";
import Navbar from "../components/Navbar";
import ParallaxScroll from "../components/ui/parallax-scroll";

const EConclavePage = () => {
  return (
    <div className="p-4 bg-black min-h-screen min-w-full">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center mb-4">E-Conclave</h1>
      <img
        src="/path-to-event-image.jpg"
        alt="E-Conclave Event"
        className="w-full max-w-lg mx-auto rounded shadow-md mb-6"
      />
      <p className="text-lg text-gray-700 text-center mb-6">
        E-Conclave is our flagship event that brings together industry experts,
        entrepreneurs, and students to foster innovation and collaboration.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <ParallaxScroll>
        <img
          src="/path-to-gallery-image1.jpg"
          alt="Gallery 1"
          className="rounded shadow-md"
        />
        <img
          src="/path-to-gallery-image2.jpg"
          alt="Gallery 2"
          className="rounded shadow-md"
        />
        <img
          src="/path-to-gallery-image3.jpg"
          alt="Gallery 3"
          className="rounded shadow-md"
        />
        <img
          src="/path-to-gallery-image4.jpg"
          alt="Gallery 4"
          className="rounded shadow-md"
        />
        </ParallaxScroll>
      </div>
    </div>
  );
};

export default EConclavePage;
