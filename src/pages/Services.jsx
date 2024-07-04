import React from 'react';
import weddingImage from '../assets/images/bc2.png';
import fog from '../assets/images/bc2.png';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="relative pb-20 mb-20 mt-20">
      <Parallax
        bgImage={fog}
        strength={500}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-[#1A2A40]/30"></div>
        <div className="container mx-auto px-4 py-16 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 mb-12 lg:mb-0"
            >
              <img
                src={weddingImage}
                alt="Bride on a swing"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 object-cover transform hover:scale-105 transition duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 lg:pl-16 text-center lg:text-left"
            >
              <div className="bg-[#FFFAF0] p-8 rounded-3xl shadow-lg">
                <h3 className="text-[#D32F2F] uppercase tracking-widest mb-2 text-sm font-semibold">SJ Photography</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2A40] mb-6 leading-tight">
                  Destiny Has Brought You Together, Let Us Take You{' '}
                  <span className="text-[#D32F2F]">
                    Beyond
                  </span>
                </h2>
                <p className="text-[#1A2A40] mb-8 text-lg leading-relaxed">
                  At Beyond Destiny, we're dedicated to making your special day truly extraordinary. 
                  Experience a stress-free, joyful journey with our exceptional team. We believe that 
                  capturing the perfect moment starts with a genuine smile...
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D32F2F] text-[#FFFAF0] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Services;
