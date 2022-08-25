//pages
import HomePage from '@/ts/containers/pages/HomePage';
import LoginPage from '@/ts/containers/pages/LoginPage';
import AboutUsPage from '@/ts/containers/pages/AboutUsPage';
import ContactUsPage from '@/ts/containers/pages/ContactUsPage';
import AddDeliveryAddressPage from '@/ts/containers/pages/AddDeliveryAddressPage';
import DeliveryTimePage from '@/ts/containers/pages/DeliveryTimePage';
import DeliveryAddressPage from '@/ts/containers/pages/DeliveryAddressPage';
import EditCardMessagePage from '@/ts/containers/pages/EditCardMessagePage';
import CustomCarePage from '@/ts/containers/pages/CustomerCarePage';
//routes
import {
  getAboutUsPageUrl,
  getAddDeliveryAddressPageUrl,
  getContactUsPageUrl,
  getCustomerCarePageUrl,
  getDeliveryAddressPageUrl,
  getDeliveryTimePageUrl,
  getEditCardMessagePageUrl,
  getHomePageUrl,
  getLoginPageUrl,
} from '@/ts/routing/routingConstants/AppUrls';

export const publicRoutes = [
  {
    restricted: true,
    element: <LoginPage />,
    path: getLoginPageUrl(),
  },
  {
    element: <AboutUsPage />,
    path: getAboutUsPageUrl(),
  },
  {
    element: <ContactUsPage />,
    path: getContactUsPageUrl(),
  },
];

export const deliveryAddressRoutes = [
  {
    element: <AddDeliveryAddressPage />,
    path: getAddDeliveryAddressPageUrl(),
    label: 'Add delivery address',
  },
];

export const privateRoutes = [
  {
    element: <HomePage />,
    path: getHomePageUrl(),
  },
  {
    element: <DeliveryTimePage />,
    path: getDeliveryTimePageUrl(),
  },
  {
    element: <DeliveryAddressPage />,
    path: getDeliveryAddressPageUrl(),
    children: deliveryAddressRoutes,
  },
  {
    element: <EditCardMessagePage />,
    path: getEditCardMessagePageUrl(),
  },
  {
    element: <CustomCarePage />,
    path: getCustomerCarePageUrl(),
  },
];
