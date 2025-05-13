// components/AdminAlbumEdit.js
import React from 'react';
import AdminYouTubeLink from './AdminYouTubeLink';

function AdminAlbumEdit({ albumId }) {
  return (
    <div>
      {/* ... (other album edit fields) */}
      <AdminYouTubeLink albumId={albumId} />
    </div>
  );
}

export default AdminAlbumEdit;