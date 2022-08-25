import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
//routes
import { getHomePageUrl } from '../routingConstants/AppUrls';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
//interfaces
import { PublicRouteGuardInterface } from '@/ts/routing/RoutingInterfaces';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';

//used to load authentication routes (ex: login, signup, ...etc) and public routes
const PublicRouteGuard = ({ restricted, children, redirect }: PublicRouteGuardInterface) => {
  const location = useLocation(),
    { locale } = useContext(LocaleContext);

  if (redirect) {
    return <Navigate replace to={redirect} />;
  } else if (isAuthenticated() && restricted) {
    return <Navigate replace to={getHomePageUrl(locale)} state={{ from: location }} />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRouteGuard;
