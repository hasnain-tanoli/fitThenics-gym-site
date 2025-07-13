import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import Spinner from '../ui/Spinner';

const PrivateRoute = ({ roles }) => {
  const { loggedIn, loading } = useAuthStatus();
  const { user } = useSelector((state) => state.auth);

  if (loading) {
    return <Spinner />;
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
