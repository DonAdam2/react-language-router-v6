import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//managers
import LocalStorageManager from '@/ts/managers/LocalStorageManger';
//constants
import { LocalStorageKeys } from '@/ts/constants/Constants';
//routes
import { getHomePageUrl } from '@/ts/routing/routingConstants/AppUrls';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';

const LoginPage = () => {
  const { t } = useTranslation(),
    navigate = useNavigate(),
    { locale } = useContext(LocaleContext);

  const loginHandler = () => {
    LocalStorageManager.setItem(LocalStorageKeys.TOKEN, 'testToken');
    navigate(getHomePageUrl(locale), { replace: true });
  };

  return (
    <div>
      <p>{t('loginPage.title')}</p>
      <button onClick={loginHandler}>Sign in</button>
    </div>
  );
};

export default LoginPage;
