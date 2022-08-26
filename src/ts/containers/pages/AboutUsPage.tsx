import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t } = useTranslation();

  return <div>{t('aboutUsPage.title')}</div>;
};

export default AboutUsPage;
