import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>{t('notFound.title')}</div>;
};

export default NotFoundPage;
