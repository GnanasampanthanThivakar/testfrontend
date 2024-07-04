import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { FaArrowLeft, FaImages, FaTrash, FaEdit } from 'react-icons/fa';
import './EditAlbum.css';

function EditAlbum() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [formData, setFormData] = useState({
    Album_Category: '',
    Name: '',
    Description: '',
    images: [],
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [albumToDelete, setAlbumToDelete] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8070/photographyweb/getdetails')
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const images = event.target.files;
    const newImages = Array.from(images);
    setFormData({
      ...formData,
      images: [...formData.images, ...newImages],
    });
  };

  const handleAddOrUpdateClick = () => {
    if (selectedAlbum) {
      axios.put(`http://localhost:8070/photographyweb/update/${selectedAlbum._id}`, formData)
        .then((response) => {
          if (response.status === 200) {
            toast.success('Album updated successfully');
            setSelectedAlbum(null);
            setFormData({
              Album_Category: '',
              Name: '',
              Description: '',
              images: [],
            });

            axios.get('http://localhost:8070/photographyweb/getdetails')
              .then((response) => {
                setAlbums(response.data);
              })
              .catch((error) => {
                console.error('Error fetching albums:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error updating album:', error);
        });
    } else {
      const albumData = new FormData();
      albumData.append('Album_Category', formData.Album_Category);
      albumData.append('Name', formData.Name);
      albumData.append('Description', formData.Description);

      for (let i = 0; i < formData.images.length; i++) {
        albumData.append('images', formData.images[i]);
      }

      axios
        .post('http://localhost:8070/photographyweb/add', albumData)
        .then((_res) => {
          toast.success('Album added successfully');
          axios.get('http://localhost:8070/photographyweb/getdetails')
            .then((response) => {
              setAlbums(response.data);
            })
            .catch((error) => {
              console.error('Error fetching albums:', error);
            });
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  const handleDeleteClick = (album) => {
    setAlbumToDelete(album);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8070/photographyweb/delete/${albumToDelete._id}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Album deleted successfully');
          axios.get('http://localhost:8070/photographyweb/getdetails')
            .then((response) => {
              setAlbums(response.data);
            })
            .catch((error) => {
              console.error('Error fetching albums:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error deleting album:', error);
      })
      .finally(() => {
        setShowDeleteModal(false);
        setAlbumToDelete(null);
      });
  };

  const handleEditClick = (album) => {
    setSelectedAlbum(album);
    setFormData({
      Album_Category: album.Album_Category,
      Name: album.Name,
      Description: album.Description,
      images: album.images,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ color: "#333" }}>
        Edit Albums
      </h1>
      <nav className="d-flex justify-content-end mb-4">
        <a href="/Admindash" className="btn btn-secondary"><FaArrowLeft className="mr-2" />Back</a>
      </nav>
      <div className="card p-4 mb-5">
        <form>
          <div className="form-group">
            <label htmlFor="Album_Category">Album Category</label>
            <input
              type="text"
              id="Album_Category"
              name="Album_Category"
              value={formData.Album_Category}
              onChange={handleChange}
              placeholder="Enter Album Category"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Name">Album Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter Album Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              placeholder="Enter Album Description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="images">Album Images</label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="form-control-file"
            />
          </div>
          {formData.images.length > 0 && (
            <div className="mb-3">
              <h6>Selected Images: {formData.images.length}</h6>
              <ul className="list-group">
                {formData.images.map((image, index) => (
                  <li key={index} className="list-group-item">{image.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <button type="button" onClick={handleAddOrUpdateClick} className="btn btn-primary">
              {selectedAlbum ? 'Update Album' : 'Add Album'}
            </button>
            {selectedAlbum && (
              <button type="button" onClick={() => handleDeleteClick(selectedAlbum)} className="btn btn-danger">
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="row">
        {albums.map((album) => (
          <div key={album._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{album.Album_Category}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{album.Name}</h6>
                <p className="card-text">{album.Description}</p>
                <div className="image-list d-flex flex-wrap">
                  {album.images.map((image, _index) => (
                    <img
                      key={image.filename}
                      src={`http://localhost:8070/uploads/${image.filename}`}
                      alt={image.filename}
                      className="img-thumbnail mr-2 mb-2"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  ))}
                </div>
                <p className="mt-2"><FaImages className="mr-2" />{album.images.length} Images</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-warning" onClick={() => handleEditClick(album)}><FaEdit className="mr-2" />Update</button>
                <button className="btn btn-danger" onClick={() => handleDeleteClick(album)}><FaTrash className="mr-2" />Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this album?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditAlbum;
