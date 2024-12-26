import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homealbum() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8070/photographyweb/getdetails')
      .then(response => setAlbums(response.data.slice(0, 10))) // Show up to 10 albums
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#290000] min-h-screen py-20">
      <motion.h2
        className="text-center text-[#FFFAF0] mb-12 text-3xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Lovely Moments <span className="font-semibold text-[#FFD700]">Showcase</span>
      </motion.h2>
      <div className="container mx-auto px-10">
        <Slider {...settings}>
          {albums.map((album, index) => (
            <motion.div
              key={album._id}
              className="p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                {/* Full image card */}
                <motion.img
                  src={`http://localhost:8070/uploads/${album.images[0]?.filename}`}
                  alt={album.Name}
                  className="w-full h-[400px] object-cover" // Increased height
                  whileHover={{ scale: 1.05 }} // Add animation on hover
                />
                {/* Overlay content */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 shadow-2xl transition-all duration-300 hover:bg-opacity-50">
                  <motion.h2
                    className="text-[#FFFAF0] text-lg font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {album.Name}
                  </motion.h2>
                  <motion.p
                    className="text-[#FFFAF0] text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    {album.Album_Category}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.4 }}
                  >
                    <Link
                      to={`/album/${album._id}`}
                      className="inline-block text-[#FFD700] hover:text-[#FFFAF0] font-semibold text-sm mt-2"
                    >
                      View Details
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Homealbum;
