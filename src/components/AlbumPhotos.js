import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function AlbumPhotos() {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({ Album_Category: '', Name: '', Description: '' });
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8070/photographyweb/get/${albumId}`)
      .then((response) => {
        setAlbumData(response.data.photographer);
        setPhotos(response.data.photographer.images);
      })
      .catch((error) => {
        console.error('Error fetching album data and photos:', error);
      });
  }, [albumId]);

  return (
    <div>
      <Navbar/>
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ color: '#1A2A40', fontSize: '30px', marginBottom: '10px', textAlign: 'center' }}>
          {albumData.Name}
        </h2>
        <p style={{ color: '#757575', fontSize: '18px', marginBottom: '30px', textAlign: 'center' }}>
          {albumData.Description}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '250px',
          gap: '10px'
        }}>
          {photos.map((photo, index) => (
            <div key={photo.filename} style={{
              gridColumn: index % 7 === 0 || index % 7 === 6 ? 'span 2' : 'span 1',
              gridRow: index % 7 === 0 || index % 7 === 6 ? 'span 2' : 'span 1',
              overflow: 'hidden',
            }}>
              <img
                src={`http://localhost:8070/uploads/${photo.filename}`}
                alt={photo.filename}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default AlbumPhotos;
