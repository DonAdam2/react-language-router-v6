import { ReactNode } from 'react';

interface RouteInterface {
  element: any;
  path: (locale: string) => string;
  label?: string;
}

export interface RouteWithChildrenInterface extends RouteInterface {
  children?: RouteWithChildrenInterface[];
}

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

export interface HeaderRouteInterface {
  label: string;
  path: (locale: string) => string;
  permissions?: string | string[];
}
