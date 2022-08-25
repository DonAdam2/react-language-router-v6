import { ReactNode } from 'react';

export interface RestrictedRouteInterface {
  requiredPermissions: string[] | string;
  children?: ReactNode;
}

export interface RestrictedWrapperInterface extends RestrictedRouteInterface {
  notPermittedComponent?: ReactNode;
}

export interface PublicRouteInterface {
  restricted?: boolean;
  children: ReactNode;
  redirect?: string;
}
