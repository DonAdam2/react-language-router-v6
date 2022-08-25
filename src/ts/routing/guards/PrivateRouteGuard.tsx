import { ReactNode, useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//routes
import { getLoginPageUrl } from '../routingConstants/AppUrls';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';

const PrivateRouteGuard = ({ children }: { children: ReactNode }) => {
  const location = useLocation(),
    { locale } = useContext(LocaleContext);

  if (isAuthenticated()) {
    return <>{children}</>;
  }

  return <Navigate replace to={getLoginPageUrl(locale)} state={{ from: location }} />;
};

export default PrivateRouteGuard;
