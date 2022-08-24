import { useSelector } from 'react-redux';
//state
import { State } from '@/ts/store/rootReducer';
//selectors
//replace the following with your own selector
import { getAppUserPermissionsList } from '@/ts/store/app/selectors/AppSelectors';
//interfaces
import { RestrictedRouteInterface } from '../RoutingInterfaces';

const RestrictedSection = ({
  requiredPermissions,
  children,
}: RestrictedRouteInterface): JSX.Element | null => {
  const userPermissionsList = useSelector((state: State) => getAppUserPermissionsList(state));

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
  return null;
};

export default RestrictedSection;
