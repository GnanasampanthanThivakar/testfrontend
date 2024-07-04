import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import image1 from '../assets/images/bc1.png';
import image2 from '../assets/images/bc2.png';
import image3 from '../assets/images/bc3.png';
import image4 from '../assets/images/bc3.png';
import image5 from '../assets/images/bc1.png';
import image6 from '../assets/images/bc1.png';

const reviews = [
  {
    id: 1,
    names: 'Suhashi & Chamupathy',
    image: image1,
    text: "Thank you so much, Mahesh and your super talented team for making my special day even more special with your photography. I must mention here that when I requested you at our first meeting, that I will need the edited pics and at least one complete album by the 2nd week of December 2019 you and your team went BEYOND my expectations and were able to give all the pictures with completed albums exactly as per the timeline."
  },
  {
    id: 2,
    names: 'Priya & Rahul',
    image: image2,
    text: "We couldn't be happier with the stunning photos from our wedding day. The team captured every moment beautifully, from the smallest details to the grandest celebrations. Their professionalism and creativity shone through in every shot."
  },
  {
    id: 3,
    names: 'Aisha & Omar',
    image: image3,
    text: "Working with this photography team was a dream come true. They made us feel so comfortable in front of the camera, and the results are breathtaking. Our wedding album is a treasure we'll cherish forever."
  },
  {
    id: 4,
    names: 'Emily & David',
    image: image4,
    text: "The photographers were like ninjas on our wedding day - everywhere but never intrusive. They captured moments we didn't even know happened! The photos tell the story of our day perfectly, and we're so grateful for their talent."
  },
  {
    id: 5,
    names: 'Mei & Jun',
    image: image5,
    text: "We were blown away by the creativity and attention to detail in our wedding photos. The team went above and beyond to capture the essence of our cultural fusion wedding. Every photo is a work of art."
  },
  {
    id: 6,
    names: 'Sofia & Alessandro',
    image: image6,
    text: "From our engagement shoot to the last dance at our reception, this photography team exceeded all our expectations. They have a gift for capturing genuine emotions and creating timeless images. We can't recommend them highly enough!"
  }
];

const ClientReviewSweeper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 mb-40">
      <h2 className="text-3xl font-light text-center text-gray-700 mb-2">
        DISCOVER WHAT OTHERS HAVE EXPERIENCED
      </h2>
      <p className="text-center text-gray-600 mb-1">You deserve the absolute best.</p>
      <p className="text-center text-gray-600 mb-12">That's why we want to make sure we are the right choice for you.</p>

      <div className="flex items-center justify-center">
        <button onClick={prevReview} className="text-3xl text-gray-400 hover:text-gray-600 transition-colors">
          &#8249;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-12 bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].names}
              className="w-full md:w-1/2 h-64 md:h-96 object-cover"
            />
            <div className="p-6 md:w-1/2">
              <div className="text-2xl font-semibold text-gray-800 mb-4">{reviews[currentIndex].names}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{reviews[currentIndex].text}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={nextReview} className="text-3xl text-gray-400 hover:text-gray-600 transition-colors">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ClientReviewSweeper;