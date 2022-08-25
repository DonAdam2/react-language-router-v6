import { Navigate, useLocation } from 'react-router-dom';
//routes
import { getHomePageUrl } from '../routingConstants/AppUrls';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
//interfaces
import { PublicRouteInterface } from '@/ts/routing/RoutingInterfaces';

//used to load authentication routes (ex: login, signup, ...etc) and public routes
const PublicRoute = ({ restricted, children, redirect }: PublicRouteInterface) => {
  const location = useLocation();

  if (redirect) {
    return <Navigate replace to={redirect} />;
  } else if (isAuthenticated() && restricted) {
    return <Navigate replace to={getHomePageUrl()} state={{ from: location }} />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoute;
