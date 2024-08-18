import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu button

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 p-4 fixed w-full shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-500">
          <Link to="/" className="hover:text-blue-300 transition duration-300">Portfolio</Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-blue-300 transition duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 lg:space-x-12 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link
              to="/"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="https://drive.google.com/file/d/1MB8u3U2jHdP6HmUiAcpUZ3dBdD8xkbfc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300 transition duration-300 text-lg font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
