import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoutes: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const auth = useAuth();
  if (auth.loggedInUser === null) return <Redirect to="/login" />;

  return <Route {...rest} />;
};

export default ProtectedRoutes;
