import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <nav style={{
        backgroundColor: '#1A2A40',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#FFD700', margin: 0, fontFamily: 'Khand, sans-serif' }}>
          {albumData.Album_Category}
        </h1>
        <Link to="/gallery" style={{
          color: '#FFD700',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          Back to Gallery
        </Link>
      </nav>

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

      <footer style={{
        backgroundColor: '#1A2A40',
        color: '#FFFAF0',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p>All Rights Reserved by Evora Moments Photography © 2023</p>
      </footer>
    </div>
  );
}

export default AlbumPhotos;