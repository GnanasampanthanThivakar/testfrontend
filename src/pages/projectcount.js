import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Camera, 
  Briefcase, 
  Image 
} from "lucide-react";
import backgroundImage from "../assets/images/13.jpg";

const ProjectCount = () => {
  const stats = [
    { 
      id: 1, 
      icon: Users, 
      target: 200, 
      label: "Satisfied Customers",
      color: "#8B0000"
    },
    { 
      id: 2, 
      icon: Camera, 
      target: 160, 
      label: "Studio Sessions",
      color: "#B22222"
    },
    { 
      id: 3, 
      icon: Briefcase, 
      target: 10, 
      label: "Years of Experience",
      color: "#DC143C"
    },
    { 
      id: 4, 
      icon: Image, 
      target: 200, 
      label: "Photoshoots Completed",
      color: "#A52A2A"
    },
  ];

  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.target / 100);
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] += step;
            if (newCounts[index] > stat.target) newCounts[index] = stat.target;
          }
          return newCounts;
        });
      }, 30);
      return interval;
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible, stats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed"
      }}
      ref={sectionRef}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center text-white space-y-12"
        >
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-thin tracking-wide mb-16"
          ><h2>
            We Are <span className=" font-bold  text-[#FFD700]">Professional</span> 
            <br />In Our Craft
            </h2>
          </motion.h2>

          {/* Stats Section */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div 
                  className="mb-4 flex items-center justify-center"
                  style={{ color: stat.color }}
                >
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>

                {/* Counter */}
                <h3 
                  className="text-4xl font-bold mb-2 text-white"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {counts[index]}
                  {stat.target > 100 && "+"}
                </h3>

                {/* Label */}
                <p className="text-gray-300 uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCount;