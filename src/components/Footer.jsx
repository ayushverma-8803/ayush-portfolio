import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-extrabold mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Ayush Verma
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mb-4">
          <li className="hidden md:block">
            <Link
              to="/"
              className="text-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              Home
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/about"
              className="text-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              About
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/skills"
              className="text-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              Skills
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/portfolio"
              className="text-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/contact"
              className="text-white hover:text-blue-600 transition duration-300 text-sm md:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/ayush-verma-675113229" 
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ayushverma-8803" 
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/AashiVe80478093"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm md:text-base">© {new Date().getFullYear()} Ayush Verma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
