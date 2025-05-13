import React, { useState } from 'react';
import { Camera, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Wedding Photography",
      description: "Timeless elegance captured through our lens. Every precious moment of your special day preserved with artistic precision and emotional depth.",
      icon: Heart,
      details: ["Full Day Coverage", "Second Photographer", "Luxury Album", "Digital Gallery"]
    },
    {
      title: "Engagement Sessions",
      description: "Your love story deserves to be told in the most beautiful way. Create stunning pre-wedding memories in carefully curated locations.",
      icon: Users,
      details: ["Location Scouting", "Style Consultation", "High-Res Images", "Print Release"]
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that capture your essence. Perfect for personal branding, family photos, or special occasions.",
      icon: Camera,
      details: ["Multiple Outfits", "Professional Styling", "Retouching", "Online Gallery"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1217] py-20 px-4 relative overflow-hidden">
      {/* Animated dark red particles */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(41, 0, 0, 0.1) 0%, transparent 50%)' }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-800 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <h2 className="  font-light text-white mb-6">
            <span className="inline-block border-b-2 border-[#780000] pb-2">Exceptional</span>
            <span className="block mt-2">Photography Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
            Where artistry meets moments, creating timeless memories
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#290000]/20 to-[#290000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative border border-[#290000]/30 bg-black/80 p-8 h-full transform transition-all duration-500 group-hover:scale-105">
                {/* Service Icon */}
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-[#290000]/20 rounded-full blur-md transform group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#780000]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-light text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="space-y-3 text-sm text-gray-300">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-[#780000]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                  {/* <button className="px-8 py-3 bg-transparent border border-[#780000] text-white hover:bg-[#290000] hover:text-white transition-all duration-300 text-sm tracking-wider">
                    EXPLORE MORE
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
