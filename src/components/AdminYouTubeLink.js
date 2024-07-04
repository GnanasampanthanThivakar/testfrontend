// components/AdminYouTubeLink.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminYouTubeLink({ albumId }) {
  const [url, setUrl] = useState('');
  const [linkId, setLinkId] = useState(null);

  useEffect(() => {
    fetchYouTubeLink();
  }, [albumId]);

  const fetchYouTubeLink = async () => {
    try {
      const response = await axios.get(`/api/youtubeLinks/album/${albumId}`);
      if (response.data) {
        setUrl(response.data.url);
        setLinkId(response.data._id);
      }
    } catch (error) {
      console.error('Error fetching YouTube link:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (linkId) {
        await axios.put(`/api/youtubeLinks/update/${linkId}`, { url });
      } else {
        await axios.post('/api/youtubeLinks/add', { url, albumId });
      }
      alert('YouTube link saved successfully!');
      fetchYouTubeLink();
    } catch (error) {
      console.error('Error saving YouTube link:', error);
      alert('Failed to save YouTube link.');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">YouTube Link</h3>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AdminYouTubeLink;