//interfaces
import { RestrictedRouteInterface } from '../RoutingInterfaces';
//components
import RestrictedWrapper from '@/ts/routing/routingComponents/RestrictedWrapper';

const RestrictedSection = ({
  requiredPermissions,
  children,
}: RestrictedRouteInterface): JSX.Element | null => (
  <RestrictedWrapper requiredPermissions={requiredPermissions}>{children}</RestrictedWrapper>
);

export default RestrictedSection;
