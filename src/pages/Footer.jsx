import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Motto */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Ecell SKNCOE</h1>
          <p className="text-lg italic">Dream. Discover. Disrupt.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Ecell SKNCOE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;