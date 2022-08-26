import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
import { LocalStorageKeys } from '@/ts/constants/Constants';
//routes
import {
  headerAuthRoutes,
  headerPrivateRoutes,
  headerPublicRoutes,
} from '@/ts/routing/routingConstants/RoutesConfig';
import { getLoginPageUrl } from '@/ts/routing/routingConstants/AppUrls';
//routing components
import RestrictedSection from '@/ts/routing/routingComponents/RestrictedSection';
//managers
import LocalStorageManager from '@/ts/managers/LocalStorageManger';
//interfaces
import { HeaderRouteInterface } from '@/ts/routing/RoutingInterfaces';

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext),
    navigate = useNavigate(),
    [lang, setLang] = useState(locale);

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  const changeLanguageHandler = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setLocale(value);
    setLang(value);
  };

  const renderLink = ({
    to,
    label,
    key,
    permissions,
  }: {
    to: string;
    label: string;
    key: number;
    permissions?: string | string[];
  }) => {
    const link = (
      <NavLink
        key={permissions ? undefined : key}
        to={to}
        className={(navData) => (navData.isActive ? 'active' : '')}
      >
        {label}
      </NavLink>
    );
    if (permissions) {
      return (
        <RestrictedSection key={key} requiredPermissions={permissions}>
          {link}
        </RestrictedSection>
      );
    }

    return link;
  };

  const renderLinks = (list: { path: (locale: string) => string; label: string }[]) => {
    return list.map((el: HeaderRouteInterface, i) =>
      renderLink({ to: el.path(locale), label: el.label, key: i, permissions: el.permissions })
    );
  };

  const logoutHandler = () => {
    LocalStorageManager.removeItem(LocalStorageKeys.TOKEN);
    navigate(getLoginPageUrl(locale), { replace: true });
  };

  return (
    <div className="header-wrapper">
      <div>
        {isAuthenticated() ? renderLinks(headerPrivateRoutes) : renderLinks(headerAuthRoutes)}
        {renderLinks(headerPublicRoutes)}
      </div>
      <div>
        {isAuthenticated() && (
          <button onClick={logoutHandler} style={{ marginInlineEnd: 10 }}>
            Logout
          </button>
        )}
        <select onChange={changeLanguageHandler} value={lang}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
