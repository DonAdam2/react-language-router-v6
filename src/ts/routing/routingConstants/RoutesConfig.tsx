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
//interfaces
import { HeaderRouteInterface, PublicRouteInterface } from '@/ts/routing/RoutingInterfaces';

export const publicRoutes: PublicRouteInterface[] = [
  {
    restricted: true,
    element: <LoginPage />,
    path: (locale: string) => getLoginPageUrl(locale),
  },
  {
    element: <AboutUsPage />,
    path: (locale: string) => getAboutUsPageUrl(locale),
  },
  {
    element: <ContactUsPage />,
    path: (locale: string) => getContactUsPageUrl(locale),
  },
];

export const deliveryAddressRoutes = [
  {
    element: <AddDeliveryAddressPage />,
    path: (locale: string) => getAddDeliveryAddressPageUrl(locale),
    label: 'Add delivery address',
  },
];

export const privateRoutes = [
  {
    element: <HomePage />,
    path: (locale: string) => getHomePageUrl(locale),
  },
  {
    element: <DeliveryTimePage />,
    path: (locale: string) => getDeliveryTimePageUrl(locale),
  },
  {
    element: <DeliveryAddressPage />,
    path: (locale: string) => getDeliveryAddressPageUrl(locale),
    children: deliveryAddressRoutes,
  },
  {
    element: <EditCardMessagePage />,
    path: (locale: string) => getEditCardMessagePageUrl(locale),
  },
  {
    element: <CustomCarePage />,
    path: (locale: string) => getCustomerCarePageUrl(locale),
    permissions: 'customerCare',
  },
];

export const headerPublicRoutes: HeaderRouteInterface[] = [
  {
    label: 'About us',
    path: (locale: string) => getAboutUsPageUrl(locale),
  },
  {
    label: 'Contact us',
    path: (locale: string) => getContactUsPageUrl(locale),
  },
];

export const headerPrivateRoutes: HeaderRouteInterface[] = [
  {
    label: 'Home',
    path: (locale: string) => getHomePageUrl(locale),
  },
  {
    label: 'Delivery time',
    path: (locale: string) => getDeliveryTimePageUrl(locale),
  },
  {
    label: 'Delivery address',
    path: (locale: string) => getDeliveryAddressPageUrl(locale),
  },
  {
    label: 'Edit card',
    path: (locale: string) => getEditCardMessagePageUrl(locale),
  },
  {
    label: 'Customer care',
    path: (locale: string) => getCustomerCarePageUrl(locale),
    permissions: 'customerCare',
  },
];

export const headerAuthRoutes: HeaderRouteInterface[] = [
  {
    label: 'Login',
    path: (locale: string) => getLoginPageUrl(locale),
  },
];
