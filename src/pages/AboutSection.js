import React from "react";
import { motion } from "framer-motion";
import customImage2 from "../assets/images/01d.png";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const services = [
    {
      title: "WEDDINGS",
      description: "Every love story is unique. We capture the essence of your special day with creativity and passion.",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },
    {
      title: "ENGAGEMENTS",
      description: "Commemorate the start of your journey together with a stunning engagement photoshoot.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      title: "CASUAL SHOOTS",
      description: "Relax and be yourself. Our casual shoots capture genuine moments and emotions.",
      icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
    },
  ];

  return (
    <motion.div
      className="relative py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${customImage2})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="  text-[#FFFFFF] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Capturing your unforgettable moments with artistry and care. Let’s
            make magic together!
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-gradient-to-br from-[#FFE5E5] to-[#FFBBBB] rounded-lg shadow-xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#FF4444] to-[#FFAAAA] opacity-0 group-hover:opacity-80 z-0 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-tr from-[#FF7676] to-[#FF4444] shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-[#D32F2F] mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-[#1A2A40]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
