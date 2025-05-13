import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";

function HeroGallery() {
  const [albums, setAlbums] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:8070/photographyweb/getdetails")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-ivory py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-light text-dark-blue mb-4">
            Featured Albums
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Explore our collection of stunning wedding moments.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4"
          >
            {albums.map((album, index) => (
              <Card album={album} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/all-albums"
            className="inline-block px-8 py-3 bg-red text-ivory rounded-full hover:bg-bright-red transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg font-semibold"
          >
            Explore All Albums
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroGallery;
