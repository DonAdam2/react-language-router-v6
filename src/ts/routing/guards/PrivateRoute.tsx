import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//routes
import { getLoginPageUrl } from '../routingConstants/AppUrls';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  if (isAuthenticated()) {
    return <>{children}</>;
  }

  return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
};

export default PrivateRoute;
