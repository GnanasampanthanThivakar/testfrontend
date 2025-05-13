import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Navbar";
import { motion } from "framer-motion";
import backgroundImage from "../assets/images/bc2.jpg";

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/photographyweb/getdetails")
      .then((response) => {
        setAlbums(response.data);
        const uniqueCategories = [
          ...new Set(response.data.map((album) => album.Album_Category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  const filteredAlbums = albums
    .filter(
      (album) =>
        album.Album_Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        album.Name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((album) =>
      selectedCategory ? album.Album_Category === selectedCategory : true
    );

  return (
    <div className="min-h-screen bg-[#290000]">
      {/* Header section remains the same */}
      <header
        className="relative h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90"></div>
        <Header />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-7xl font-light text-[#FFFAF0] tracking-wider mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Portfolio</h1>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 mb-32 sm:mb-40 lg:mb-60">
        <h2 className="font-light text-center mb-12 sm:mb-16 lg:mb-20 text-[#FFFFFF] text-3xl sm:text-4xl lg:text-5xl">
          Album <span className="text-[#FFD700]">Gallery</span>
        </h2>

        {/* Updated Search and Filter Section */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:justify-between sm:items-center">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 p-3 rounded-lg bg-[#3a0000] border border-[#520000] text-[#FFFFFF] placeholder-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-1/3 p-3 rounded-lg bg-[#3a0000] border border-[#520000] text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Updated Album Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {filteredAlbums.map((album, index) => (
            <motion.div
              key={album._id}
              className="bg-[#520000] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {album.images && album.images.length > 0 && (
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden group">
                  <img
                    src={`http://localhost:8070/uploads/${album.images[0].filename}`}
                    alt={album.images[0].filename}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-[#FFFFFF]">
                  {album.Name}
                </h3>
                <p className="text-[#FFD700] text-sm sm:text-base mb-4 sm:mb-6">
                  {album.Album_Category}
                </p>
                <Link
                  to={`/album/${album._id}`}
                  className="inline-block text-[#FFD700] font-semibold hover:text-[#FF0000] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  View Album →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;
