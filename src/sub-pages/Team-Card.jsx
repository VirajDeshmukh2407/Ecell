import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const CardDemo = ({ name, position, image, email, linkedin }) => {
  return (
    <div className="max-w-xs w-full group/card overflow-hidden relative bg-black rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div
        className={`cursor-pointer h-96 rounded-md flex flex-col justify-between p-4 bg-cover opacity-90`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-300 text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-content z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {name}
          </h1>
          <p className="font-normal text-sm text-gray-50 mt-2">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
