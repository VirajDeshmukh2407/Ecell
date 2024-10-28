// src/components/ScrollButton.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer z-30 ">
      <button onClick={scrollToBottom} className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-gray-300 w-8 h-8 animate-bounce"
        />
        {/* <span className="text-gray-300 text-sm mt-2">Scroll Down</span> */}
      </button>
    </div>
  );
};

export default ScrollButton;
