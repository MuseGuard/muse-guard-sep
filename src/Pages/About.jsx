import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto my-8 relative rounded-lg border p-4"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">About Muse Guard</h1>
        <p className="text-gray-300 leading-loose">
          Muse Guard is an innovative project dedicated to safeguarding and monitoring your space. Using cutting-edge
          technology, we provide real-time data and insights to ensure the security and well-being of your surroundings.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl text-gray-200 font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-loose">
            Our mission is to create a seamless and secure environment for individuals and businesses. Through
            continuous innovation and a commitment to excellence, we aim to redefine the standards of security and
            surveillance.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl text-gray-200 font-bold mb-4">Meet the Team</h2>
          <div className="flex flex-wrap">
            {/* Team member with social icons */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="m-4 p-4 border rounded shadow-md transition-transform duration-300 ease-in-out bg-gray-800"
            >
              <h3 className="text-xl font-bold mb-2">Vatsal Jariwala</h3>
              <p className="text-gray-300">Founder & CEO</p>
              <div className="social-icons mt-2">
                <a href="https://github.com/vatsal8784" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-white mr-2"></i>
                </a>
                <a href="https://linkedin.com/in/vatsal-jariwala-a77604237" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
              </div>
            </motion.div>
            {/* Add more team members */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
