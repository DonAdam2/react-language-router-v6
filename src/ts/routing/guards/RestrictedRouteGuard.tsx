import { JSX, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
//routes
import { getLoginPageUrl } from '../routingConstants/AppUrls';
//interfaces
import { RestrictedRouteInterface } from '../RoutingInterfaces';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
//components
import PermissionsCannotAccess from '../routingComponents/PermissionsCannotAccess';
import RestrictedWrapper from '@/ts/routing/routingComponents/RestrictedWrapper';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';

const RestrictedRouteGuard = ({
  children,
  requiredPermissions,
}: RestrictedRouteInterface): JSX.Element => {
  const location = useLocation(),
    { locale } = useContext(LocaleContext);

  if (isAuthenticated()) {
    return (
      <RestrictedWrapper
        requiredPermissions={requiredPermissions}
        notPermittedComponent={
          <PermissionsCannotAccess requiredPermissions={requiredPermissions} />
        }
      >
        {children}
      </RestrictedWrapper>
    );
  } else {
    return <Navigate replace to={getLoginPageUrl(locale)} state={{ from: location }} />;
  }
};

export default RestrictedRouteGuard;
