import { useTranslation } from 'react-i18next';

const DeliveryTimePage = () => {
  const { t } = useTranslation();

  return <div>{t('deliveryTime.title')}</div>;
};

export default DeliveryTimePage;
