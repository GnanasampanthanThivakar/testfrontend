import React, { useState, useEffect } from "react";
import { notification, Spin } from "antd";
import { motion } from "framer-motion";
import axios from "axios";
import customImage3 from "../assets/images/vdo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:8070/api/videos");
      setVideos(response.data);
      setLoading(false);
    } catch (err) {
      notification.error({
        message: "Error Fetching Videos",
        description: err.message,
      });
      setLoading(false);
    }
  };

  const extractYouTubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="min-h-screen bg-[#290000] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative h-[500px] md:h-[600px] lg:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${customImage3})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90 p-8 md:p-16"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-light tracking-wider mb-4 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
            Welcome to Our Video Gallery
            </h1>
          </motion.h1>
          <motion.div
            className="w-16 md:w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      {/* Video Gallery */}
      <div className="px-4 py-12 md:px-12 lg:px-20">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl  mb-8">
          Explore Our Collection
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => {
              const videoId = extractYouTubeId(video.videoId);
              return (
                <div key={video._id} className="w-full">
                  {videoId ? (
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                  ) : (
                    <div className="h-72 bg-gray-300 flex items-center justify-center text-gray-600">
                      Invalid Video
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default VideoGallery;
