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
      {/* Header with Parallax Effect */}
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
          ><h1>
            Our Portfolio
            </h1>
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
      <main className="container mx-auto px-16 py-24 mb-60">
        <h2 className="font-light text-center mb-20 text-[#FFFFFF]">
          Album <span className="text-[#D32F2F] font-semibold">Gallery</span>
        </h2>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4 md:mb-0"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Album Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredAlbums.map((album, index) => (
            <motion.div
              key={album._id}
              className="bg-[#520000] overflow-hidden shadow-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {album.images && album.images.length > 0 && (
                <div className="relative h-80 overflow-hidden group">
                  {/* Grayscale Image */}
                  <img
                    src={`http://localhost:8070/uploads/${album.images[0].filename}`}
                    alt={album.images[0].filename}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                    style={{ filter: "grayscale(100%)" }} // Grayscale filter
                  />
                  {/* Original Color Image */}
                  <img
                    src={`http://localhost:8070/uploads/${album.images[0].filename}`}
                    alt={album.images[0].filename}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-100 absolute top-0 left-0 opacity-0"
                  />
                  <div className="absolute inset-0"></div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-[#FFFFFF]">
                  {album.Name}
                </h3>
                <p className="text-[#FFFFFF] mb-6">{album.Album_Category}</p>
                <Link
                  to={`/album/${album._id}`}
                  className="inline-block text-[#D32F2F] font-semibold hover:text-[#FF0000] transition-all duration-300 transform hover:scale-105"
                >
                  View Album
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
