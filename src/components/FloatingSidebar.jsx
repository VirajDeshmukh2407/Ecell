import React from "react";
import "../css/FloatingSidebar.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const FloatingSidebar = () => {
  return (
    <div className="floating-sidebar">
      <a href="https://www.linkedin.com/company/iic-ecell-skncoe-official/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://www.instagram.com/iic_ecellskncoe?igsh=MTJzMDAzdHVucXJhbQ==" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://x.com/EcellSkncoe50?t=6d2JFJjTlkzzqfqPFYYHhQ&s=08" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
    </div>
  );
};

export default FloatingSidebar;
