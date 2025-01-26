// import React from "react"

// const Hero = () => {
//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage: "url('/Econclave25/hp_bg.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6">
//         {/* Heading */}
//         <h1 className="text-lg md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif">
//           IIC ECELL SKNCOE
//         </h1>
//         <span className="text-lg md:text-2xl text-bold text-amber-100 font-serif">Presents</span>

//         {/* Econclave Image */}
//         <img
//           src="/Econclave25/Etitle.png"
//           alt="Econclave 2025"
//           className="w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 max-h-[30vh] object-contain filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
//         />

//         {/* Date */}
//         <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-200 font-serif">
//           11<sup className="text-xs">th</sup> - 12<sup className="text-xs">th</sup> Feb
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           <button className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
//             Register for Event
//           </button>
//           <button className="px-6 py-2 text-sm font-medium text-amber-200 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-transparent to-transparent hover:from-amber-900 hover:to-amber-800 border-2 border-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
//             Go to Events
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/Econclave25/hp_bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Heading */}
        <h1 className="text-lg md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif">
          IIC ECELL SKNCOE
        </h1>
        <span className="text-lg md:text-2xl text-bold text-amber-100 font-serif">Presents</span>

        {/* Econclave Image */}
        <img
          src="/Econclave25/Etitle.png"
          alt="Econclave 2025"
          className="w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 max-h-[30vh] object-contain filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        />

        {/* Date */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-200 font-serif">
          11<sup className="text-xs">th</sup> - 12<sup className="text-xs">th</sup> Feb
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            Register for Event
          </button>
          <button className="px-6 py-2 text-sm font-medium text-amber-200 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-transparent to-transparent hover:from-amber-900 hover:to-amber-800 border-2 border-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            Go to Events
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
