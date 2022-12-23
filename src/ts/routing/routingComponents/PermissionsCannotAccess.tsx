import { useTranslation } from 'react-i18next';
//interfaces
import { RestrictedRouteInterface } from '../RoutingInterfaces';

const PermissionsCannotAccess = ({ requiredPermissions }: RestrictedRouteInterface) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('noPermission.title')}</h1>
      <h3>{t('noPermission.subtitle')}</h3>
      <p>{t('noPermission.description')}</p>
      <ul style={{ textAlign: 'start' }}>
        {Array.isArray(requiredPermissions) ? (
          requiredPermissions.map((el, i) => <li key={i}>{el}</li>)
        ) : (
          <li>
            <strong>{requiredPermissions}</strong>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PermissionsCannotAccess;
