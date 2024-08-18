import React from 'react';
import { motion } from 'framer-motion'; 
import proj from '../assets/pro.jpg';
function Portfolio() {
  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A robust real-time chat application built with React and WebSocket, featuring a sleek interface and seamless communication.',
      // image: '/assets/pro.jpg', // Ensure the path is correct
      link: 'https://your-chat-app-demo.com'
    },
    {
      title: 'Mental Health Tracker',
      description: 'An application designed to help users track and improve their mental well-being, with interactive features and data visualization.',
      // image: '/assets/mental-health-tracker.jpg', // Ensure the path is correct
      link: 'https://your-mental-health-tracker-demo.com'
    },
    {
      title: 'Voice Assistant',
      description: 'A multi-purpose voice assistant with advanced speech recognition and natural language processing capabilities.',
      // image: '/assets/voice-assistant.jpg', // Ensure the path is correct
      link: 'https://your-voice-assistant-demo.com'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={proj} 
                alt={`Screenshot of ${project.title}`} 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
