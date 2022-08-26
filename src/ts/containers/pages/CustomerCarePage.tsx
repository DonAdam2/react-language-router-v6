import { useTranslation } from 'react-i18next';

const CustomCarePage = () => {
  const { t } = useTranslation();

  return <div>{t('customerCare.title')}</div>;
};

export default CustomCarePage;
