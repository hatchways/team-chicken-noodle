import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

const ProtectedRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const auth = useAuth();
  if (!auth.loggedInUser) return <Redirect to="/login" />;

  return <Route {...rest} />;
};

export default ProtectedRoute;
