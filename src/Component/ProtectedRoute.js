import React from 'react'
import { Link, Navigate } from 'react-router-dom';

 function ProtectedRoute({element }) {
    const isAuthenticated = !!localStorage.getItem('jwt');
    return isAuthenticated ? element
       : 
       <Navigate to ="/login" replace state={{ from: window.location.pathname }}/>
      ;
}
export default ProtectedRoute
