import React from 'react'

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('./images/Econclave25/hp_bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Title Image */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src="./images/Econclave25/Etitle.jpeg"
            alt="Econclave 2025"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
