import React from "react";
import customImage from "../assets/images/ww.jpg";
import customImage1 from "../assets/images/gl1.jpg";
import customImage2 from "../assets/images/gl2.jpg";
import customImage3 from "../assets/images/02.jpg";
import customImage4 from "../assets/images/gl2.jpg";

const GallerySection = () => {
  return (
    <div>
      {/* Mobile Layout */}
      <div className="flex flex-col items-center py-8 px-4 bg-[#290000] lg:hidden ">
        {/* Background Image */}
        <div className="relative mb-8 w-full">
          <img
            src={customImage3}
            alt="Wedding Couple"
            className="w-full h-[400px] object-cover shadow-lg border-2 border-white"
          />

          {/* Foreground Images */}
          <div className="absolute p-10 top-80  flex gap-2">
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
              src={customImage4}
              alt="Foreground Image 3"
              className="w-[120px] h-[90px] object-cover shadow-lg border-2 border-white"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center mt-10">
          <h1 className=" heading text-2xl font-light text-[#FFFFFF] mb-2">
            PROFESSIONAL
          </h1>
          <p className="text-base font-light text-[#FFFFFF] mb-2 ">
            Wedding Photographers And Videographers
          </p>
          <p className="text-sm text-gray-100 mb-4">
            Harvest Creative Media is a professional wedding photography and
            videography company which specializes in producing and editing
            videos for a variety of occasions, such as weddings, gatherings,
            educational gatherings, corporate and commercial experiences, and
            more.
          </p>
          <button className="bg-[#780000] hover:bg-[#FF0000] text-white font-medium px-4 py-2 text-sm rounded-md">
            Read More
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center pb-60  lg:items-start gap-10 px-0 py-11 bg-[#290000] relative">
        {/* Left Image Section with Foreground Images */}
        <div className="lg:w-1/2 relative">
          {/* Background Image */}
          <img
            src={customImage3}
            alt="Wedding Couple"
            className="w-full object-cover h-[600px] shadow-lg border-2 border-white"
          />

          {/* Foreground Images */}
          <div className="absolute top-80 mt-10 left-10 flex gap-4 z-10 pl-64 pt-5">
            <img
              src={customImage1}
              alt="Foreground Image 1"
              className="w-[400px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
            />
            <img
              src={customImage2}
              alt="Foreground Image 2"
              className="w-[400px] h-[300px] object-cover shadow-md border-2 border-white shadow-lg"
            />
            <img
              src={customImage4}
              alt="Foreground Image 3"
              className="w-[400px] h-[300px] object-cover shadow-lg shadow-md border-2 border-white"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 flex flex-col text-left lg:text-right mt-24 px-28">
          <h1 className=" heading text-4xl font-light text-left text-[#FFFFFF] mb-4">
            PROFESSIONAL
          </h1>
          <h2 className="text-lg font-light text-left text-[#FFFFFF] mb-4">
            Wedding Photographers and Videographers in Jaffna
          </h2>
          <p className="text-base text-left text-gray-100 mb-6">
            SJ Photography is Jaffna's top wedding photography and videography
            studio. We capture weddings, events, and special moments with
            creativity and precision. Let us preserve your memories beautifully.{" "}
            <strong>Contact us today</strong>!
          </p>
          <button className="bg-[#780000] hover:bg-[#FF0000] text-white font-medium px-4 py-2 text-sm rounded-md w-40">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
