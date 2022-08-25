import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//managers
import LocalStorageManager from '@/ts/managers/LocalStorageManger';
//constants
import { LocalStorageKeys } from '@/ts/constants/Constants';
//routes
import { getHomePageUrl } from '@/ts/routing/routingConstants/AppUrls';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';

const LoginPage = ({ t }: PageInterface) => {
  const navigate = useNavigate(),
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

export default translate(LoginPage);
