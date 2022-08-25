import { ChangeEvent, useContext, useEffect, useState } from 'react';
//contexts
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
//managers
import LocalStorageManager from '@/ts/managers/LocalStorageManger';

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

  const renderLink = (list: { path: (locale: string) => string; label: string }[]) => {
    return list.map((el, i) => (
      <NavLink
        key={i}
        to={el.path(locale)}
        className={(navData) => (navData.isActive ? 'active' : '')}
      >
        {el.label}
      </NavLink>
    ));
  };

  const logoutHandler = () => {
    LocalStorageManager.removeItem(LocalStorageKeys.TOKEN);
    navigate(getLoginPageUrl(locale), { replace: true });
  };

  return (
    <div className="header-wrapper">
      <div>
        {isAuthenticated() ? renderLink(headerPrivateRoutes) : renderLink(headerAuthRoutes)}
        {renderLink(headerPublicRoutes)}
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
