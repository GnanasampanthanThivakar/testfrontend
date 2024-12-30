import React, { useEffect, useState, useRef } from "react";
import { Users, Camera, Briefcase, Image } from "lucide-react";
import backgroundImage from "../assets/images/13.jpg";

const ProjectCount = () => {
  const stats = [
    {
      id: 1,
      icon: Users,
      target: 200,
      label: "Satisfied Clients",
      subtext: "Trust & Excellence"
    },
    {
      id: 2,
      icon: Camera,
      target: 160,
      label: "Studio Sessions",
      subtext: "Creative Moments"
    },
    {
      id: 3,
      icon: Briefcase,
      target: 10,
      label: "Years of Experience",
      subtext: "Industry Expertise"
    },
    {
      id: 4,
      icon: Image,
      target: 200,
      label: "Photoshoots Done",
      subtext: "Perfect Captures"
    }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
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
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;
      const stepValue = stat.target / steps;

      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(
              newCounts[index] + stepValue,
              stat.target
            );
          }
          return newCounts;
        });
      }, stepDuration);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed"
      }}
      ref={sectionRef}
    >
      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-[#290000]/40">
        {/* Animated luxury pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 border border-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${1 + Math.random()})`,
                animation: `float ${20 + Math.random() * 10}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Elegant heading section */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl"/>
          <h2 className=" tracking-tight text-white relative">
            Our Legacy of
            <span className="block mt-2 font-bold text-white relative">
              Excellence
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-white/20 via-white to-white/20"/>
            </span>
          </h2>
        </div>

        {/* Luxury stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative group"
            >
              <div className={`
                relative rounded-2xl overflow-hidden
                transition-all duration-700 ease-out transform
                ${activeIndex === index ? 'scale-105' : 'scale-100'}
              `}>
                {/* Luxury card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"/>
                
                {/* Animated border */}
                <div className="absolute inset-0">
                  <div className={`
                    absolute inset-0 border border-white/20
                    transition-all duration-700
                    ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}/>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        absolute bg-white/20
                        transition-all duration-700
                        ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                      `}
                      style={{
                        height: i % 2 === 0 ? '2px' : '40%',
                        width: i % 2 === 0 ? '40%' : '2px',
                        top: i < 2 ? '-1px' : 'auto',
                        bottom: i >= 2 ? '-1px' : 'auto',
                        left: i % 2 === 0 ? '-1px' : 'auto',
                        right: i % 2 === 0 ? 'auto' : '-1px'
                      }}
                    />
                  ))}
                </div>

                <div className="relative p-8 text-center">
                  {/* Icon with glow effect */}
                  <div className={`
                    relative mb-6 transition-transform duration-700
                    ${activeIndex === index ? 'scale-110' : 'scale-100'}
                  `}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full blur-xl"/>
                    <stat.icon 
                      size={48}
                      className="relative mx-auto text-white"
                      strokeWidth={1}
                    />
                  </div>

                  {/* Animated counter */}
                  <h3 className={`
                    text-5xl font-bold mb-4 text-white
                    transition-all duration-700
                    ${activeIndex === index ? 'scale-110' : 'scale-100'}
                  `}>
                    {Math.round(counts[index])}
                    {stat.target > 100 && "+"}
                  </h3>

                  {/* Labels with fade effect */}
                  <p className="text-white/90 font-medium text-lg mb-2">
                    {stat.label}
                  </p>
                  <p className={`
                    text-sm text-white/60 
                    transition-all duration-500
                    ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}>
                    {stat.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatParticle ${15 + Math.random() * 15}s linear infinite`,
              animationDelay: `-${Math.random() * 15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Add this to your global CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes floatParticle {
    0% { transform: translate(0, 0); }
    33% { transform: translate(50px, 50px); }
    66% { transform: translate(-50px, 100px); }
    100% { transform: translate(0, 0); }
  }
  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(30px, 30px) rotate(180deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default ProjectCount;