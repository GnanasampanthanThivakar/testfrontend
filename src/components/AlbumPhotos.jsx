import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import backgroundImage from "../assets/images/bc2.jpg";

// PhotoModal Component
const PhotoModal = ({
  selectedPhotoIndex,
  photos = [],
  onClose,
  onNext,
  onPrevious,
}) => {
  // Handle keyboard navigation - moved before any conditional returns
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrevious?.();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose, onNext, onPrevious]);

  // Safety checks - after hooks
  if (
    !photos.length ||
    selectedPhotoIndex === null ||
    selectedPhotoIndex === undefined
  ) {
    return null;
  }

  // Ensure the current photo exists - after hooks
  const currentPhoto = photos[selectedPhotoIndex];
  if (!currentPhoto || !currentPhoto.filename) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Navigation overlay */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Left navigation */}
          <div className="w-24 h-full flex items-center justify-start">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious?.();
              }}
              className="group p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
            >
              <ChevronLeft
                size={32}
                className="text-white/70 group-hover:text-white transition-colors"
              />
            </button>
          </div>

          {/* Right navigation */}
          <div className="w-24 h-full flex items-center justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              className="group p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
            >
              <ChevronRight
                size={32}
                className="text-white/70 group-hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Image container */}
        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
          {currentPhoto?.filename && (
            <img
              src={`http://localhost:8070/uploads/${currentPhoto.filename}`}
              alt={currentPhoto.filename || "Gallery image"}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <p className="text-white text-sm font-medium">
              {selectedPhotoIndex + 1} / {photos.length}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
        >
          <X
            size={24}
            className="text-white/70 hover:text-white transition-colors"
          />
        </button>
      </div>
    </div>
  );
};

// Rest of your AlbumPhotos component remains exactly the same
function AlbumPhotos() {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({
    Album_Category: "",
    Name: "",
    Description: "",
  });
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

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

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex < photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : photos.length - 1
    );
  };

  const closePopup = () => {
    setSelectedPhotoIndex(null);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Navbar />

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
            className="text-5xl font-light text-[#FFFAF0] tracking-wider mb-4"
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

      <div
        style={{
          backgroundColor: "#290000",
          minHeight: "100vh",
          padding: "20px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <p
          style={{
            color: "#FFD700",
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
          {photos.map((photo, index) => (
            <div
              key={photo.filename}
              style={{
                overflow: "hidden",
                cursor: "pointer",
                marginBottom: "15px",
              }}
              onClick={() => setSelectedPhotoIndex(index)}
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

      {/* Photo Modal */}
      {selectedPhotoIndex !== null && photos && photos.length > 0 && (
        <PhotoModal
          selectedPhotoIndex={selectedPhotoIndex}
          photos={photos}
          onClose={closePopup}
          onNext={handleNextPhoto}
          onPrevious={handlePreviousPhoto}
        />
      )}

      <Footer />
    </div>
  );
}

export default AlbumPhotos;
