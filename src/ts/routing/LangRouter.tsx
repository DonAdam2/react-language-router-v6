import { createContext, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//interfaces
import { RouteWithChildrenInterface } from '@/ts/routing/RoutingInterfaces';
//constants
import { isAuthenticated } from '@/ts/constants/Helpers';
//routing helpers
import { availableLocales, getDefaultLanguage } from '@/ts/routing/routingConstants/RoutingHelpers';
//routes
import { getHomePageUrl, getLoginPageUrl } from '@/ts/routing/routingConstants/AppUrls';
import { allRoutes } from '@/ts/routing/routingConstants/RoutesConfig';
//root component
import App from '../../App';
//pages
import NotFoundPage from '@/ts/containers/pages/NotFoundPage';
//components
import LoadingIcon from '@/ts/components/shared/LoadingIcon';

export const LocaleContext = createContext({
  locale: '',
  // eslint-disable-next-line
  setLocale: (newLocale: string) => {},
});

const LangRouter = () => {
  const { i18n } = useTranslation(),
    { pathname, search, hash } = useLocation(),
    navigate = useNavigate(),
    defaultLocale = getDefaultLanguage({ fallbackLocal: 'en' }) as string,
    pathnameLocale = pathname.substring(1, 3).toLowerCase(),
    [locale, setLocale] = useState(defaultLocale),
    loaderTimerRef = useRef<any>(),
    [isLoading, setIsLoading] = useState(true);
  //set body direction
  document.body.dir = i18n.dir(i18n.language);

  useEffect(() => {
    loaderTimerRef.current = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(loaderTimerRef.current);
    }, 300);
  }, []);

  useEffect(() => {
    if (availableLocales.includes(pathnameLocale)) {
      updateLocale(pathnameLocale);
    } else if (pathname === '/') {
      updateLocale(defaultLocale);
    }
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    let lang = defaultLocale;

    if (availableLocales.includes(pathnameLocale)) {
      lang = pathnameLocale;
      setLanguageHandler(lang);
    } else if (pathname === '/') {
      setLanguageHandler(lang);
    }
    // eslint-disable-next-line
  }, [locale]);

  const setLanguageHandler = (lang: string) => {
    //set language attribute on HTML element
    document.documentElement.setAttribute('lang', lang);

    if (lang === 'en') {
      i18n.changeLanguage('en-US');
    } else {
      i18n.changeLanguage('ar-SA');
    }
  };

  const updateLocale = (newLocale: string) => {
    const newPath = `/${newLocale}` + pathname.substring(3);

    if (locale !== newLocale) {
      if (newPath === `/${newLocale}/` || newPath === `/${newLocale}` || pathname === '/') {
        navigate(getHomePageUrl(newLocale));
      } else {
        navigate(`${newPath}${hash}${search}`);
      }
      setLocale(newLocale);
    } else if (newPath === `/${newLocale}/` || newPath === `/${newLocale}` || pathname === '/') {
      if (isAuthenticated()) {
        navigate(getHomePageUrl(newLocale));
      } else {
        navigate(getLoginPageUrl(newLocale));
      }
    }
  };

  const renderRouteWithChildren = (routes: RouteWithChildrenInterface[]) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path(locale)} element={route.element}>
        {route.children && renderRouteWithChildren(route.children)}
      </Route>
    ));
  };

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      <Routes>
        <Route path={`/${locale}`} element={<App />}>
          {renderRouteWithChildren(allRoutes)}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LocaleContext.Provider>
  );
};

export default LangRouter;
