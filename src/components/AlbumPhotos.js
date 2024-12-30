import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import backgroundImage from "../assets/images/bc2.jpg";

function AlbumPhotos() {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({
    Album_Category: "",
    Name: "",
    Description: "",
  });
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/photographyweb/get/${albumId}`)
      .then((response) => {
        setAlbumData(response.data.photographer);
        setPhotos(response.data.photographer.images);
      })
      .catch((error) => {
        console.error("Error fetching album data and photos:", error);
      });
  }, [albumId]);

  // Masonry breakpoint configuration
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl font-light text-[#FFFAF0]  tracking-wider mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {albumData.Name || "Album Photos"}
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      {/* Album Photos Section */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: "20px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <p
          style={{
            color: "#757575",
            
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {albumData.Description}
        </p>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((photo) => (
            <div
              key={photo.filename}
              style={{
                overflow: "hidden",
                cursor: "pointer",
                marginBottom: "15px",
              }}
              onClick={() =>
                setSelectedPhoto(
                  `http://localhost:8070/uploads/${photo.filename}`
                )
              }
            >
              <img
                src={`http://localhost:8070/uploads/${photo.filename}`}
                alt={photo.filename}
                style={{
                  width: "100%",
                  display: "block",

                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Popup Modal */}
      {selectedPhoto && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Selected"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              border: "2px solid #FFD700",
            }}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AlbumPhotos;
