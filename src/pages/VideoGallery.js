import React, { useState, useEffect } from "react";
import { notification, Spin, Card } from "antd";
import { motion } from "framer-motion";
import axios from "axios";
import customImage3 from "../assets/images/bc2.png"; // Import the custom image
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const { Meta } = Card;

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
        className="relative h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${customImage3})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-7xl font-light tracking-wider mb-4 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Video Gallery
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      {/* Video Gallery */}
      <div className="p-6">
        <h2 className="text-center text-3xl font-bold mb-6">
          Explore Our Collection
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => {
              const videoId = extractYouTubeId(video.videoId);
              return (
                <Card
                  key={video._id}
                  hoverable
                  className="shadow-lg bg-[#3E2723] border-none"
                  cover={
                    videoId ? (
                      <div className="relative pb-[56.25%] h-0">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="h-72 bg-gray-300 flex items-center justify-center text-gray-600">
                        Invalid Video
                      </div>
                    )
                  }
                >
                  <Meta
                    title={video.title}
                    description="Photography Studio"
                    className="text-center text-white"
                  />
                </Card>
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
