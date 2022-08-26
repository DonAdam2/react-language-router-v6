import { useTranslation } from 'react-i18next';

const EditCardMessagePage = () => {
  const { t } = useTranslation();

  return <div>{t('editCardMessage.title')}</div>;
};

export default EditCardMessagePage;
