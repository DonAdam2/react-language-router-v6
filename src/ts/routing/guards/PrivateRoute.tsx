import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//routes
//replace the following with your own url
import { getLoginPageUrl } from '../routingConstants/AppUrls';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  //to be revised
  if (LocalStorageManager.getItem('token')) {
    return <>{children}</>;
  }

  return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
};

export default PrivateRoute;
