import React, { useState } from 'react';
import registrationImage from '../assets/images/reg.jpg';
import weddingImage from '../assets/images/wed.jpg';
import birthdayImage from '../assets/images/bday.jpg';
import anniversaryImage from '../assets/images/pub.jpg';

const PackagePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    Registration: registrationImage,
    Wedding: weddingImage,
    Birthday: birthdayImage,
    Anniversary: anniversaryImage,
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImageIndex(0);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === Object.keys(categories).length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? Object.keys(categories).length - 1 : prevIndex - 1
    );
  };

  const renderImages = () => {
    if (activeCategory === 'All') {
      const imagesToShow = Object.entries(categories).slice(0, 3);
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {imagesToShow.map(([category, image], index) => (
            <div key={category} className="relative animate-fadeIn">
              <img
                src={image}
                alt={category}
                className="w-full h-80 md:h-96 cursor-pointer transform hover:scale-105 transition-transform duration-200 object-cover rounded-lg shadow-lg"
                onClick={() => openModal(index)}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1A2A40] bg-opacity-75 text-[#FFFAF0] p-2 rounded-b-lg">
                <h3 className="text-center font-light">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex justify-center animate-slideIn">
          <div className="relative w-full md:w-2/3">
            <img
              src={categories[activeCategory]}
              alt={activeCategory}
              className="w-full h-80 md:h-96 cursor-pointer transform hover:scale-105 transition-transform duration-200 object-cover rounded-lg shadow-lg"
              onClick={() => openModal(Object.keys(categories).indexOf(activeCategory))}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1A2A40] bg-opacity-75 text-[#FFFAF0] p-2 rounded-b-lg">
              <h3 className="text-center font-light">{activeCategory}</h3>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] text-[#1A2A40] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-12 text-[#1A2A40]">Our Packages</h1>
        
        <div className="flex justify-center mb-12 space-x-4">
          {['All', ...Object.keys(categories)].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeCategory === category 
                  ? 'bg-[#D32F2F] text-[#FFFFFF] shadow-md'
                  : 'bg-[#E0E0E0] text-[#1A2A40] hover:bg-[#FFD700] hover:text-[#1A2A40]'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {renderImages()}

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 animate-fadeIn">
            <div className="relative bg-[#FFFAF0] p-8 rounded-lg max-w-4xl max-h-screen overflow-hidden">
              <button
                className="absolute top-2 right-2 text-[#D32F2F] hover:text-[#FFD700] text-3xl font-light transition-colors duration-200"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="relative flex items-center justify-center h-full">
                <button
                  className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-16 bg-[#1A2A40] bg-opacity-50 text-[#FFFAF0] hover:bg-opacity-75 transition-all duration-200"
                  onClick={prevImage}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <img
                  src={Object.values(categories)[currentImageIndex]}
                  alt="Popup"
                  className="max-w-full max-h-screen rounded-lg shadow-2xl"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
                <button
                  className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-16 bg-[#1A2A40] bg-opacity-50 text-[#FFFAF0] hover:bg-opacity-75 transition-all duration-200"
                  onClick={nextImage}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.59 6.41L12 5l6 6-6 6-1.41-1.41L15.17 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackagePage;
