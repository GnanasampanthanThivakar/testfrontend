import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ album, index }) => {
  return (
    <motion.div
      key={album._id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-none w-64"
    >
      <Link to={`/album/${album._id}`} className="block group">
        <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-2 aspect-h-3">
          {album.images && album.images.length > 0 && (
            <img
              src={`http://localhost:8070/uploads/${album.images[0].filename}`}
              alt={album.Name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <h3 className="text-lg font-semibold mb-1 transition-transform duration-300 group-hover:-translate-y-1">
              {album.Name}
            </h3>
            <p className="text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
              {album.Album_Category}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
