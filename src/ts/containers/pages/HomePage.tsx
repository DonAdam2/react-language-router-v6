import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return <div>{t('homePage.title')}</div>;
};

export default HomePage;
