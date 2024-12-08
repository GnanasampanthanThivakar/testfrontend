import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../assets/images/13.jpg"; // Replace with your image path

const ProjectCount = () => {
  const stats = [
    { id: 1, icon: "👍", target: 200, label: "Satisfied Customers" },
    { id: 2, icon: "🎥", target: 160, label: "Studio Sessions" },
    { id: 3, icon: "👨‍💼", target: 10, label: "Years of Experience" },
    { id: 4, icon: "📸", target: 200, label: "Photoshoots Completed" },
  ];

  const [counts, setCounts] = useState(
    stats.map(() => 0) // Initialize all counters to 0
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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

    // Start counter animation when visible
    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.target / 100); // Smooth increment step
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] += step;
            if (newCounts[index] > stat.target) newCounts[index] = stat.target; // Stop at target
          }
          return newCounts;
        });
      }, 30); // Speed of the increment
      return interval;
    });

    return () => {
      intervals.forEach(clearInterval); // Clear intervals when component unmounts or animation ends
    };
  }, [isVisible, stats]);

  return (
    <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={sectionRef} // Attach the section to the ref
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white space-y-12">
          {/* Title */}
          <h2 className="text-4xl font-bold md:text-5xl">
            We Are Professional In Our Works.
            <br /> Hire Us!!
          </h2>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center bg-opacity-80 bg-dark rounded-lg p-6 bg-gray-800 hover:bg-gray-700 transition duration-300"
              >
                {/* Icon */}
                <div className="text-4xl mb-4" style={{ color: "#8B0000" }}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <h3 className="text-3xl font-bold mb-2">
                  {counts[index]}
                  {stat.target > 100 && "+"}
                </h3>

                {/* Label */}
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
