import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';
//routes
import { getAddDeliveryAddressPageUrl } from '@/ts/routing/routingConstants/AppUrls';

const DeliveryAddressPage = ({ t }: PageInterface) => {
  const { locale } = useContext(LocaleContext);

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

export default translate(DeliveryAddressPage);
