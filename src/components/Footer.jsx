import React, { useState } from "react";
import image1 from "../assets/images/10t.jpg";
import image2 from "../assets/images/bc1.jpg";
import image3 from "../assets/images/bc3.jpg";
import image4 from "../assets/images/bc2.jpg";
import image5 from "../assets/images/10t.jpg";
import image6 from "../assets/images/10t.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1, image2, image3, image4, image5, image6];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <footer className="bg-[#520000] text-[#E0E0E0] pt-24 pb-8 relative px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Image Gallery */}
      {/* <div className="absolute left-0 right-0 flex flex-wrap justify-center gap-4 -top-16">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover shadow-xl cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div> */}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-[#E0E0E0] text-3xl"
          >
            &times;
          </button>
        </div>
      )}

      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-light text-[#FFFFFF] mb-4">
              SJ Photography
            </h2>
            <p className="mb-4 text-[#FFFFFF]">
              If you feel like you can trust us with your story, please get in
              touch.
            </p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-start">
              <a
                href="#"
                className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-light text-[#FFFFFF] mb-4">
              Call Us
            </h3>
            <p className="mb-2 text-[#E0E0E0]">+94 76 00 08 887</p>
            <p className="text-[#E0E0E0]">+94 76 00 08 887</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-light text-[#FFFFFF] mb-4">
              Write to Us
            </h3>
            <p className="mb-2 text-[#E0E0E0]">hello@SJphotography.com</p>
            <p className="text-[#E0E0E0]">contact@SJphotography.com</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-light text-[#FFFFFF] mb-4">
              Location
            </h3>
            <p className="mb-4 text-[#E0E0E0]">PXP3+632, Vaddukoddai</p>
            <h3 className="text-lg md:text-xl font-light text-[#FFFFFF] mb-4">
              Working Hours
            </h3>
            <p className="text-[#E0E0E0]">Mon - Sat: 9AM - 5PM</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-[#E0E0E0]">
          <p className="mb-2 text-[#E0E0E0]">
            &copy; 2024 SJ Photography (PVT) Limited. All Rights Reserved.
          </p>
          <p className="text-[#E0E0E0]">Website By Syntax9</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
