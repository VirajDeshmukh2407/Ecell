import React from "react";
import { FaEnvelope } from "react-icons/fa";

const CardDemo = ({ name, department, image, email }) => {
  return (
    <div className="w-[250px] h-[350px] overflow-hidden relative bg-black rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-full w-full rounded-md flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-300 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Text Content */}
        <div className="text-content z-10 flex flex-col items-center">
          <h1 className="font-bold text-lg text-gray-50 text-center truncate">
            {name}
          </h1>
          <p className="font-normal text-sm text-gray-50 mt-2 text-center truncate">
            {department}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
