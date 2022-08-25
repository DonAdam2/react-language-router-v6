import { ReactNode } from 'react';

export interface RestrictedRouteInterface {
  requiredPermissions: string[] | string;
  children?: ReactNode;
}

export interface RestrictedWrapperInterface extends RestrictedRouteInterface {
  notPermittedComponent?: ReactNode;
}

export interface PublicRouteGuardInterface {
  restricted?: boolean;
  children: ReactNode;
  redirect?: string;
}

export interface PublicRouteInterface {
  restricted?: boolean;
  redirect?: (locale: string) => string;
  element: JSX.Element;
  path: (locale: string) => string;
}
