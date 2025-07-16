import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({allowedRoles}) => {
  const role = localStorage.getItem("role");

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default Protected
