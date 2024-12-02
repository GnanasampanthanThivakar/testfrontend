import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Add `react-slick` for carousel functionality
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homealbum() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/photographyweb/getdetails')
      .then(response => setAlbums(response.data.slice(0, 5))) // Show only the first 5 albums
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#290000] min-h-screen py-20">
      <h2 className="text-5xl text-center text-[#FFFAF0] mb-12 font-light">
        Our Lovely Moments <span className="font-semibold text-[#FFD700]">Showcase</span>
      </h2>
      <div className="container mx-auto px-10">
        <Slider {...settings}>
          {albums.map(album => (
            <div key={album._id} className="p-4">
              <div className="bg-[#520000] rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`http://localhost:8070/uploads/${album.images[0]?.filename}`}
                  alt={album.Name}
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl text-[#FFFAF0] font-semibold mb-2">{album.Name}</h3>
                  <p className="text-[#FFFAF0] mb-4">{album.Album_Category}</p>
                  <Link
                    to={`/album/${album._id}`}
                    className="inline-block text-[#D32F2F] hover:text-[#FF0000] font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Homealbum;
