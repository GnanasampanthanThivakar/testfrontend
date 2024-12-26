// src/components/Loading.js
import React from "react";
import "./Loading.css"; // You can still use CSS for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <video className="loading-video" autoPlay loop muted>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loading;
