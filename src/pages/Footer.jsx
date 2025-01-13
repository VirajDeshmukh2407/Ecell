import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Motto */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">IIC ECELL SKNCOE</h1>
          <p className="text-lg italic">Dream. Discover. Disrupt.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href=" https://x.com/EcellSkncoe50?t=6d2JFJjTlkzzqfqPFYYHhQ&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/iic_ecellskncoe?igsh=MTJzMDAzdHVucXJhbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/iic-ecell-skncoe-official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} IIC ECELL SKNCOE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;