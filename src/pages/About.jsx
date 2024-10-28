import React from "react";
import "../css/custom-styles.css";

const About = () => {
  return (
    <div className="bg-gradient-midnight-blue-dark-purple shadow-soft-glow p-12 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-glow text-gray-300">
          Who Are We?
        </h1>
        <p className="text-lg mb-6 text-white">
          E-CELL IIC is a non-profit organization run by the students of SKNCOE
          Pune. We are dedicated to fostering a culture of entrepreneurship and
          innovation on campus. Our mission is to empower aspiring
          entrepreneurs, provide resources to startups, and bring the spirit of
          entrepreneurship into reality. Through workshops, mentorship, and
          networking opportunities, we aim to bridge the gap between ideas and
          execution.
        </p>
        <a
          href="#"
          className="text-gray-300 bg-violet-950 border border-transparent rounded text-accent p-3 mt-10"
        >
          Learn More About E-CELL IIC
        </a>
      </div>
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src="path/to/your-gif.gif"
          alt="E-Cell IIC"
          className="w-3/4 lg:w-full"
        />
      </div>
    </div>
  );
};

export default About;
