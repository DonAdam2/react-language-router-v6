import { ReactNode } from 'react';

export interface RestrictedRouteInterface {
  requiredPermissions: string[] | string;
  children?: ReactNode;
}
