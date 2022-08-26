import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';
//routes
import { getAddDeliveryAddressPageUrl } from '@/ts/routing/routingConstants/AppUrls';

const DeliveryAddressPage = () => {
  const { t } = useTranslation(),
    { locale } = useContext(LocaleContext);

  return (
    <div>
      {t('deliveryAddress.title')}
      <div>
        <Link to={getAddDeliveryAddressPageUrl(locale)}>
          {t('deliveryAddress.addDeliveryAddress')}
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default DeliveryAddressPage;
