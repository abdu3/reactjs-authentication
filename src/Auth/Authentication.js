import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
const Authentication = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user.token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default Authentication;