//selectors
import { getAppUserPermissionsList } from '@/ts/store/app/selectors/AppSelectors';
//interfaces
import { useAppSelector } from '@/ts/store/rootReducer';
import { RestrictedWrapperInterface } from '@/ts/routing/RoutingInterfaces';

const RestrictedWrapper = ({
  requiredPermissions,
  children,
  notPermittedComponent,
}: RestrictedWrapperInterface) => {
  const userPermissionsList = useAppSelector((state) => getAppUserPermissionsList(state));

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
  return <>{notPermittedComponent}</>;
};

export default RestrictedWrapper;
