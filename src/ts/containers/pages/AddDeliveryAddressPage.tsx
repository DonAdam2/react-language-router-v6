import { useTranslation } from 'react-i18next';

const AddDeliveryAddressPage = () => {
  const { t } = useTranslation();

  return <div>{t('addDeliveryAddress.title')}</div>;
};

export default AddDeliveryAddressPage;
