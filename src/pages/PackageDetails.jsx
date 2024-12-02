import React, { useState } from 'react';
import registrationImage from '../assets/images/reg.jpg';
import weddingImage from '../assets/images/wed.jpg';
import birthdayImage from '../assets/images/bday.jpg';
import anniversaryImage from '../assets/images/pub.jpg';

const PackagePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    Registration: registrationImage,
    Wedding: weddingImage,
    Birthday: birthdayImage,
    Puberty: anniversaryImage,
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderImages = () => {
    if (activeCategory === 'All') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, image]) => (
            <div
              key={category}
              className="relative animate-fadeIn"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={image}
                alt={category}
                className={`w-full h-auto cursor-pointer transform hover:scale-105 transition-transform border-2 border-[#780000]  duration-200 object-cover  shadow-3xl ${
                  activeCategory === category ? 'border-4 border-white' : ''
                }`}
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
          <div
            className="relative w-full md:w-2/3"
            onClick={() => handleCategoryClick(activeCategory)}
          >
            <img
              src={categories[activeCategory]}
              alt={activeCategory}
              className={`w-full h-auto cursor-pointer transform hover:scale-105 transition-transform duration-200 object-cover rounded-lg shadow-lg ${
                activeCategory ? 'border-4 border-white' : ''
              }`}
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
    <div className="min-h-screen bg-[#290000] text-[#1A2A40] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-semi-bold text-center mb-12 text-[#FFFFFF]">Our Packages</h1>

        {renderImages()}
      </div>
    </div>
  );
};

export default PackagePage;
