import React from "react";
import customImage from "../assets/images/o3e.png";
import customImage1 from "../assets/images/o5e.jpg";
import customImage2 from "../assets/images/o2e.jpg";
import customImage3 from "../assets/images/o4e.jpg";
import customImage4 from "../assets/images/ww3.jpg";

const GallerySection2 = () => {
  return (
    <div>
      {/* Mobile Layout */}
      <div className="flex flex-col items-center lg:hidden px-4 py-8 bg-[#FEF9F2]">
        {/* Left Text Section */}
        <div className="text-center mb-8">
          <h1 className="heading text-2xl sm:text-3xl md:text-4xl font-light text-[#0a0505] mb-4">
            PROFESSIONAL
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#000000] mb-4">
            Wedding Photographers And Videographers
          </p>
          <h1 className="text-base sm:text-lg text-black mb-6">
            Harvest Creative Media is a professional wedding photography and videography company that specializes in producing and editing videos for various occasions.
          </h1>
          <button className="bg-[#780000] hover:bg-[#FF0000] text-white font-medium px-4 py-2 text-sm rounded-md w-40">
            Read More
          </button>
        </div>

        {/* Right Image Section with Foreground Images */}
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={customImage}
            alt="Wedding Couple"
            className="w-full object-cover h-[400px] shadow-lg border-2 border-white"
          />

          {/* Foreground Images */}
          <div className="absolute top-80 p-10 flex gap-2">
            <img
              src={customImage1}
              alt="Foreground Image 1"
              className="w-[120px] h-[90px] object-cover shadow-lg border-2 border-white"
            />
            <img
              src={customImage2}
              alt="Foreground Image 2"
              className="w-[120px] h-[90px] object-cover shadow-lg border-2 border-white"
            />
            <img
              src={customImage3}
              alt="Foreground Image 3"
              className="w-[120px] h-[90px] object-cover shadow-lg border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-start gap-10 px-0 pb-60 py-12 bg-[#0b1217] relative">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex flex-col text-left px-28 mt-24">
          <h1 className=" text-left text-[#ffffff] mb-4 text-3xl sm:text-4xl ">
            PROFESSIONAL
          </h1>
          <h2 className="text-left text-white mb-4 text-xl sm:text-2xl">
            Wedding Photographers And Videographers
          </h2>
          <p className="text-left text-white mb-6 text-base sm:text-lg md:text-xl">
            Harvest Creative Media is a professional wedding photography and videography company that specializes in producing and editing videos for various occasions.
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
          <div className="absolute top-80 mt-10 flex gap-4 z-10 pt-5 -translate-x-1/2">
            <img
              src={customImage1}
              alt="Foreground Image 1"
              className="w-[300px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
              style={{ maxWidth: "unset" }}
            />
            <img
              src={customImage2}
              alt="Foreground Image 2"
              className="w-[300px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
              style={{ maxWidth: "unset" }}
            />
            <img
              src={customImage3}
              alt="Foreground Image 3"
              className="w-[300px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
              style={{ maxWidth: "unset" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection2;
