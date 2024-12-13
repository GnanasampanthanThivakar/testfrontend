import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const services = [
    {
      title: 'WEDDINGS',
      description: 'Every love story is unique. We capture the essence of your special day with creativity and passion.',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
    },
    {
      title: 'ENGAGEMENTS',
      description: 'Commemorate the start of your journey together with a stunning engagement photoshoot.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'CASUAL SHOOTS',
      description: 'Relax and be yourself. Our casual shoots capture genuine moments and emotions.',
      icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
    }
  ];

  return (
    <motion.div
      className="bg-[#FFFAF0] py-20" // Floral white background
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-5xl font-light text-[#D32F2F] mb-6">Our Services</h2> {/* Red text */}
          <p className="mt-4 font-roboto text-xl text-[#1A2A40] max-w-3xl mx-auto"> {/* Navy blue text */}
            With 5 years of global experience, we're dedicated to making your special moments unforgettable through stunning photos and videos.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12" variants={containerVariants}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#dedcdc] rounded-xl shadow-lg p-8 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl" // Lavender background
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-[#FFFAF0]"> {/* Floral white background */}
                <svg className="w-10 h-10 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Red icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-[#1A2A40] mb-4">{service.title}</h3> {/* Navy blue text */}
              <p className="font-roboto text-[#1A2A40] text-lg">{service.description}</p> {/* Navy blue text */}
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-20" variants={itemVariants}>
         
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
