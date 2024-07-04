import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  
  if (!user || user.Email !== "Admin@gmail.com") {
    return <Navigate to="/LogIn" />;
  }
  
  return children;
}

export default ProtectedRoute;