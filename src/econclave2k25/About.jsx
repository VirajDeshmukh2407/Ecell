import React from 'react';
import { Vortex } from '../components/Vortex';

const About = () => {
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden px-4 sm:px-8 lg:px-16">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="flex items-center flex-col justify-center py-6 md:py-10 lg:py-16 w-full h-full"
      >
        <h2 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-snug md:leading-normal">
          The hell is Econclave2k25?
        </h2>
        <p className="text-white text-xs sm:text-sm md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 md:mt-6 text-center leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum quia ab nisi esse unde, velit aspernatur a odio dolore magni fugiat quasi tempore, mollitia totam ea earum eos officiis!
        </p>
        {/* Uncomment this section if you plan to add a button */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] text-sm sm:text-base">
            Register now
          </button>
        </div> */}
      </Vortex>
    </div>
  );
};

export default About;
