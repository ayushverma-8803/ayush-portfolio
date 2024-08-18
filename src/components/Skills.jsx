import React from 'react';
import { motion } from 'framer-motion'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaCuttlefish } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaCuttlefish />, title: 'C++', description: 'Programming with a powerful, versatile language.' },
    { icon: <FaCuttlefish />, title: 'C', description: 'Low-level programming with a classic language.' },
    { icon: <FaJs />, title: 'JavaScript', description: 'Enhancing web functionality with dynamic behavior.' },
    { icon: <FaPython />, title: 'Python', description: 'Scripting and data processing with a versatile language.' },
    { icon: <FaDatabase />, title: 'SQL', description: 'Managing and querying relational databases.' },
    { icon: <FaHtml5 />, title: 'HTML', description: 'Building semantic and accessible web content.' },
    { icon: <FaCss3Alt />, title: 'CSS', description: 'Creating responsive and visually appealing layouts.' },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS', description: 'Styling with utility-first CSS framework.' },
    { icon: <FaReact />, title: 'React.js', description: 'Developing interactive and efficient user interfaces.' },
    { icon: <SiMysql />, title: 'MySQL', description: 'Relational database management system.' },
    { icon: <SiMongodb />, title: 'MongoDB', description: 'NoSQL database for flexible data modeling.' }
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20">
      <div className="container mx-auto text-center px-6 md:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-6 text-blue-400"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
