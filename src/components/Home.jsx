import React from 'react';
import { motion } from 'framer-motion'; 
import profileImage from '../assets/images.jpg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white pt-24 md:pt-32"
    >
      <div className="text-center px-6 md:px-12">
        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <img
            src={profileImage}
            alt="Ayush Verma"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto object-cover ring-4 ring-blue-200"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-200 border-opacity-50 glow"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }} 
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          Hello, I'm Ayush Verma
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} 
        >
          Full Stack Developer | UI/UX Enthusiast
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} 
        >
          <motion.a
            href="/about"
            className="px-6 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
          >
            More About Me  
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1nlgvsBfHgkvH09Kgr4VI0EAMxRP5XgbO/view?usp=sharing"
            target="_blank"
            className="px-6 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
          >
            Download Resume 
          </motion.a>
        </motion.div>
        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/ayush-verma-675113229" 
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="LinkedIn"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }} 
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://github.com/ayushverma-8803" 
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="GitHub"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://x.com/AashiVe80478093"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="Twitter"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 1 }} 
          >
            <FaTwitter size={30} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Home;
