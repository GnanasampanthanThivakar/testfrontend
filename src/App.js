import React from "react";
import "./App.css";
import Hero from "./pages/Hero";
import Gallery from "./components/Gallery";
// import Admindash from "./Admindash";
import { UserContextProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AlbumPhotos from './components/AlbumPhotos';

// import ProtectedRoute from "../../Admin/admin/src/component/ProtectedRoute";
import AboutUs from './pages/AboutUs'; 
import ContactForm from "./pages/ContactForm";
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Hero" element={<Hero />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />  // Note the capital 'U'
            <Route path="/contact" element={<ContactForm />} />
           
            {/* <Route path="/Admindash" element={<Admindash />} /> */}
            {/* <Route 
          path="/Admindash" 
          element={
            <ProtectedRoute>
              <Admindash />
            </ProtectedRoute>
          } 
        /> */}
            
            
            <Route path="/album/:albumId" element={<AlbumPhotos/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
