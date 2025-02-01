import React, { useEffect, useRef, useState } from "react";
import { Vortex } from "../../components/Vortex";
import Typewriter from "typewriter-effect/dist/core";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);
  
  useEffect(() => {

      const typewriter = new Typewriter(typewriterRef.current, {
        strings: [
          `Step into the <span class='font-bold text-yellow-400 text-yellow text-yellow text-yellow'>11th edition</span> of <span class='font-bold text-yellow-400 text-yellow'>E-Conclave</span>, the <span class='font-bold text-yellow-400 text-yellow'>flagship event of IIC ECELL SKNCOE</span>, where <span class='font-bold text-yellow-400 text-yellow'>industry leaders, visionary entrepreneurs, and innovative minds</span> converge for <span class='font-bold text-yellow-400 text-yellow'>powerful panel discussions, inspiring keynotes, and immersive interactive sessions.</span><br/><br/><span class='font-bold text-yellow-400 text-yellow'>Register now and be part of this extraordinary journey!</span> 🚀`
        ],
        autoStart: true,
        delay: 0.5,
        cursor: "|",
        loop: true,
        pauseFor: 15000,
      });
  }, []);

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden" data-aos="fade-up">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mt-20">
          E-Conclave 2025 <br />
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif">Where Innovation Meets Magic</span>
        </h2>

        <p
          ref={typewriterRef}
          className="text-white text-lg max-w-4xl mt-10 text-center"
        ></p>
      </Vortex>
    </div>
  );
};

export default About;
