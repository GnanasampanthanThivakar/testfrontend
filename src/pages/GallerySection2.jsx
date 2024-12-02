import React from "react";
import customImage from "../assets/images/o3e.png";
import customImage1 from "../assets/images/01e.png";
import customImage2 from "../assets/images/o2e.png";
import customImage3 from "../assets/images/o4e.png";
import customImage4 from "../assets/images/ww3.jpg";

const GallerySection2 = () => {
  return (
    <div>
      <div className="flex flex-col mb-60  lg:flex-row items-center lg:items-start gap-10 px-0 py-12 bg-[#FEF9F2] top-0 relative">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex flex-col text-left lg:text-left px-28 mt-24">
          <h1 className="text-4xl font-light text-left text-[#0a0505] mb-4">
            PROFESSIONAL
          </h1>
          <p className="text-lg font-light text-left text-[#000000] mb-4">
            Wedding Photographers And Videographers
          </p>
          <p className="text-base text-left text-black mb-6">
            Harvest Creative Media is a professional wedding photography and
            videography company which specializes in producing and editing
            videos for a variety of occasions, such as weddings, gatherings,
            educational gatherings, corporate and commercial experiences, and
            more.
          </p>
          <button className="bg-[#780000] hover:bg-[#FF0000] text-white font-medium px-4 py-2 text-sm rounded-md w-40">
            Read More
          </button>
        </div>

        {/* Right Image Section with Foreground Images */}
        <div className="lg:w-1/2 relative justify-start">
          {/* Background Image */}
          <img
            src={customImage}
            alt="Wedding Couple"
            className="w-full object-cover h-[600px] shadow-lg border-2 border-white"
          />
          
          {/* Foreground Images */}
          <div className="absolute top-80 mt-10 flex gap-4 z-10 pt-5 -translate-x-80">
            <img
              src={customImage1}
              alt="Foreground Image 1"
              className="w-[400px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
            />
            <img
              src={customImage2}
              alt="Foreground Image 2"
              className="w-[400px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
            />
            <img
              src={customImage3}
              alt="Foreground Image 3"
              className="w-[400px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection2;
