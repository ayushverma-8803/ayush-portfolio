import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images.jpg';

function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-blue-400 text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center md:flex-row md:items-start justify-center md:justify-start md:space-x-12 text-center md:text-left">
          <motion.div
            className="relative mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            <img
              src={profileImage}
              alt="Ayush Verma"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-opacity-50 animate-pulse glow"></div>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I’m a passionate developer with experience in building web applications using <strong>React</strong>, <strong>Tailwind CSS</strong>, and more. My expertise lies in creating intuitive and dynamic user interfaces that provide an exceptional user experience.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With a background in full-stack development, I enjoy solving complex problems and bringing innovative ideas to life. I'm always eager to learn new technologies and collaborate on exciting projects.
            </motion.p>
            <motion.div
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className='text-blue-400'>Some of the platforms where I actively contribute and solve problems:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a
                  href="https://leetcode.com/ayushverma08/"
                  className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300 text-sm md:text-base"
                >
                  LeetCode
                </a>
                <a
                  href="https://www.hackerrank.com/aashiverma8803"
                  className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition duration-300 text-sm md:text-base"
                >
                  HackerRank
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/ayushvermagt08"
                  className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition duration-300 text-sm md:text-base"
                >
                  GeeksforGeeks
                </a>
                <a
                  href="https://github.com/ayushverma-8803"
                  className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 text-sm md:text-base"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
