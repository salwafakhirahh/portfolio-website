import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-xl border-t border-white/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700">
            <span className="font-bold text-dustyRose">MyPortfolio</span> &copy; 2024
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-gray-600 hover:text-dustyRose transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-600 hover:text-dustyRose transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-dustyRose transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;