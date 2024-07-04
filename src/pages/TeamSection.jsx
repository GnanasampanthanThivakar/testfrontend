import React from 'react';
import { motion } from 'framer-motion';

// Import images
import image1 from '../assets/images/wed.jpg';
import image2 from '../assets/images/bc1.png';
import image3 from '../assets/images/bc1.png';
import image4 from '../assets/images/bc1.png';
import image5 from '../assets/images/bc2.png';
import image6 from '../assets/images/bc1.png';
import image7 from '../assets/images/wed.jpg';
import image8 from '../assets/images/wed.jpg';
import image9 from '../assets/images/wed.jpg';

const photographers = [
  { name: 'JENISH NICK', location: 'Hannover', awards: '10 Fearless Awards', image: image1 },
  { name: 'ANNA SMITH', location: 'Rome', awards: '20 Fearless Awards', image: image2 },
  { name: 'MICHAEL BROWN', location: 'Yorkshire', awards: '15 Fearless Awards', image: image3 },
  { name: 'EMMA WILSON', location: 'London', awards: '18 Fearless Awards', image: image4 },
  { name: 'DAVID LEE', location: 'Krakow', awards: '14 Fearless Awards', image: image5 },
  { name: 'SOPHIA GARCIA', location: 'Barcelona', awards: '10 Fearless Awards', image: image6 },
  { name: 'OLIVER TAYLOR', location: 'Paris', awards: '12 Fearless Awards', image: image7 },
  { name: 'ISABELLA MARTINEZ', location: 'Berlin', awards: '16 Fearless Awards', image: image8 },
  { name: 'LIAM JOHNSON', location: 'New York', awards: '22 Fearless Awards', image: image9 },
];

const TeamSection = () => {
  return (
    <div className="bg-[#FFFAF0] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-16 text-[#1A2A40]">
          Our Exceptional <span className="text-[#FF0000]">Photography Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {photographers.map((photographer, index) => (
            <motion.div
              key={index}
              className="bg-[#E6E6FA] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80">
                <img
                   src={photographer.image}
                   alt={photographer.name}
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A40] to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFAF0]">
                  <h3 className="text-2xl font-bold mb-1">{photographer.name}</h3>
                  <p className="text-sm">{photographer.location}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#FF0000] font-semibold mb-2">{photographer.awards}</p>
                <p className="text-[#1A2A40] text-sm">
                  Capturing life's precious moments with unparalleled creativity and passion.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;