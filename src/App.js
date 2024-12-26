import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import Gallery from "./components/Gallery";
import { UserContextProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AlbumPhotos from "./components/AlbumPhotos";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/ContactForm";
import VideoGallery from "./pages/VideoGallery";

import Loading from "./components/Loading"; // Import the Loading component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading (you can replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3);
  }, []);

  return (
    <UserContextProvider>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/Hero" element={<Hero />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/video" element={<VideoGallery />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/album/:albumId" element={<AlbumPhotos />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </UserContextProvider>
  );
}

export default App;
