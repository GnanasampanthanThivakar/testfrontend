import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./pages/Hero";
import Gallery from "./components/Gallery";
import { UserContextProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPhotos from "./components/AlbumPhotos";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/ContactForm";
import VideoGallery from "./pages/VideoGallery";
import { Camera, Aperture, Image as ImageIcon, Play, Film } from 'lucide-react';

const LuxuryLoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Crafting Your Visual Story');

  useEffect(() => {
    // Loading Progress Logic
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust the interval to control loading speed

    // Change Text Logic
    const texts = [
      'Crafting Your Visual Story',
      'Capturing Timeless Moments',
      'Creating Lasting Memories',
      'Perfecting Every Detail',
      'Bringing Dreams to Life'
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#290000] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#290000] to-black opacity-50" />

      <div className="relative w-full max-w-lg p-8 z-10">
        <div className="text-center space-y-12">
          <div className="relative h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Aperture
                  className="w-24 h-24 text-white opacity-30 animate-spin"
                  style={{ animationDuration: '8s' }}
                />
                <Camera
                  className="absolute inset-0 w-24 h-24 text-white animate-pulse"
                  style={{ animationDuration: '2s' }}
                />
                <div className="absolute inset-0 w-32 h-32 -m-4 border border-white/20 rounded-full animate-spin"
                  style={{ animationDuration: '4s' }} />
              </div>
            </div>

            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -ml-4 -mt-4"
                style={{
                  animation: 'orbit 6s linear infinite',
                  animationDelay: `${i * -1}s`,
                  transform: `rotate(${i * 60}deg) translateX(80px)`
                }}
              >
                {i % 3 === 0 ?
                  <ImageIcon className="w-8 h-8 text-white opacity-40" /> :
                  i % 3 === 1 ?
                    <Film className="w-8 h-8 text-white opacity-40" /> :
                    <Play className="w-8 h-8 text-white opacity-40" />
                }
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white tracking-wider">
              SJ Photography
            </h1>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="text-lg text-white/70 font-light tracking-widest uppercase">
              {loadingText}
            </div>
          </div>

          <div className="relative pt-6 px-8">
            <div className="overflow-hidden h-1 text-xs flex rounded-full bg-white/10">
              <div
                style={{ width: `${loadingProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-gradient-to-r from-white/40 to-white/80 transition-all duration-500"
              />
            </div>
            <div className="absolute -right-4 top-0 text-white/60 text-sm font-light">
              {loadingProgress}%
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-20 rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 4 + 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, transparent 0%, #290000 50%, black 100%);
        }
      `}</style>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);  // You can adjust this time to control how long the loading screen stays
    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContextProvider>
      <div className="App" style={{ backgroundColor: "#290000", color: "#FFFFFF" }}>
        {loading ? (
          <LuxuryLoadingScreen />
        ) : (
          <BrowserRouter>
            <Helmet>
              <title>SJ Photography - Dream Comes True</title>
              <meta
                name="description"
                content="Capture your precious moments with SJ Photography. Dream Comes True with our professional photography services."
              />
              <meta
                name="keywords"
                content="Photography, Wedding Photography, Event Photography, SJ Photography, Professional Photography, Rajeswary Hall, Jetwing Jie Jie Beach Sri Lanka, Samudra Mahal, Saree Ceremony, Jie Jie Beach by Jetwing Sri Lanka, Sri Lanka Photography Jobs"
              />
              <meta name="author" content="SJ Photography" />
              <meta property="og:title" content="SJ Photography - Capture Your Precious Moments" />
              <meta property="og:description" content="Professional wedding and event photography services that make your dreams come true." />
              <meta property="og:image" content="https://sjphotography.com/og-image.jpg" />
              <meta property="og:url" content="https://sjphotography.com" />
              <meta property="og:type" content="website" />
            </Helmet>
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
