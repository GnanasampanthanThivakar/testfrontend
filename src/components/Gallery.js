import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Navbar';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/bc2.png';

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/photographyweb/getdetails')
      .then((response) => {
        setAlbums(response.data);
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(album => album.Album_Category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  const filteredAlbums = albums.filter(album => 
    album.Album_Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    album.Name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(album => 
    selectedCategory ? album.Album_Category === selectedCategory : true
  );

  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <header
        className="relative h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A40] to-transparent opacity-70"></div>
        <Header />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-7xl font-light text-[#FFFAF0] tracking-wider mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 mb-60">
        <h2 className="text-6xl font-light text-center mb-20 text-[#1A2A40]">
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
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredAlbums.map((album, index) => (
            <motion.div
              key={album._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {album.images && album.images.length > 0 && (
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`http://localhost:8070/uploads/${album.images[0].filename}`}
                    alt={album.images[0].filename}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A40] to-transparent opacity-50"></div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-[#1A2A40]">{album.Album_Category}</h3>
                <p className="text-[#757575] mb-6">{album.Name}</p>
                <Link
                  to={`/album/${album._id}`}
                  className="inline-block px-8 py-3 bg-[#D32F2F] text-[#FFFAF0] rounded-full hover:bg-[#FF0000] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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