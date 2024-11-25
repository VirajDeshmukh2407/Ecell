import React from "react";
import "../css/FloatingSidebar.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const FloatingSidebar = () => {
  return (
    <div className="floating-sidebar">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="social-icon" />
      </a>
    </div>
  );
};

export default FloatingSidebar;
