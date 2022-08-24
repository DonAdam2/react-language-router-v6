import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//state
import { State } from '@/ts/store/rootReducer';
//selectors
//replace the following with your own selector
import { getAppUserPermissionsList } from '@/ts/store/app/selectors/AppSelectors';
//routes
//replace the following with your own url
import { getLoginPageUrl } from '../routingConstants/AppUrls';
//interfaces
import { RestrictedRouteInterface } from '../RoutingInterfaces';
//components
import PermissionsCannotAccess from '../routingComponents/PermissionsCannotAccess';

const RestrictedRoute = ({
  children,
  requiredPermissions,
}: RestrictedRouteInterface): JSX.Element => {
  const userPermissionsList = useSelector((state: State) => getAppUserPermissionsList(state)),
    location = useLocation();

  if (LocalStorageManager.getItem('token')) {
    if (Array.isArray(requiredPermissions)) {
      for (let i = 0; i < requiredPermissions.length; i++) {
        for (let j = 0; j < userPermissionsList.length; j++) {
          if (requiredPermissions[i] === userPermissionsList[j]) return <>{children}</>;
        }
      }
    }
    if (typeof requiredPermissions === 'string') {
      if (userPermissionsList.findIndex((permission) => permission === requiredPermissions) > -1)
        return <>{children}</>;
    }
    return <PermissionsCannotAccess requiredPermissions={requiredPermissions} />;
  } else {
    return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
  }
};

export default RestrictedRoute;
