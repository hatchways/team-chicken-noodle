import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

const ProtectedRoutes: React.FC<RouteProps> = ({ ...rest }) => {
  const auth = useAuth();
  if (auth.loggedInUser === null || auth.loggedInUser === undefined) return <Redirect to="/login" />;

  return <Route {...rest} />;
};

export default ProtectedRoutes;
