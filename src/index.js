import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const link1 = document.createElement("link");
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
document.head.appendChild(link1);

const link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = "true";
document.head.appendChild(link2);

const link3 = document.createElement("link");
link3.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Engagement&family=Orbitron:wght@400..900&display=swap";
link3.rel = "stylesheet";
document.head.appendChild(link3);


const linkPreconnect1 = document.createElement("link");
linkPreconnect1.rel = "preconnect";
linkPreconnect1.href = "https://fonts.googleapis.com";
document.head.appendChild(linkPreconnect1);

const linkPreconnect2 = document.createElement("link");
linkPreconnect2.rel = "preconnect";
linkPreconnect2.href = "https://fonts.gstatic.com";
linkPreconnect2.crossOrigin = "true";
document.head.appendChild(linkPreconnect2);

const linkFonts = document.createElement("link");
linkFonts.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Engagement&family=Orbitron:wght@400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap";
linkFonts.rel = "stylesheet";
document.head.appendChild(linkFonts);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
