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
import { HeaderRouteInterface, RouteWithChildrenInterface } from '@/ts/routing/RoutingInterfaces';
import PublicRouteGuard from '@/ts/routing/guards/PublicRouteGuard';
import PrivateRouteGuard from '@/ts/routing/guards/PrivateRouteGuard';
import RestrictedRouteGuard from '../guards/RestrictedRouteGuard';

const publicRoutes: RouteWithChildrenInterface[] = [
  {
    element: (
      <PublicRouteGuard restricted>
        <LoginPage />
      </PublicRouteGuard>
    ),
    path: (locale: string) => getLoginPageUrl(locale),
  },
  {
    element: (
      <PublicRouteGuard>
        <AboutUsPage />
      </PublicRouteGuard>
    ),
    path: (locale: string) => getAboutUsPageUrl(locale),
  },
  {
    element: (
      <PublicRouteGuard>
        <ContactUsPage />
      </PublicRouteGuard>
    ),
    path: (locale: string) => getContactUsPageUrl(locale),
  },
];

const deliveryAddressRoutes: RouteWithChildrenInterface[] = [
  {
    element: (
      <PrivateRouteGuard>
        <AddDeliveryAddressPage />
      </PrivateRouteGuard>
    ),
    path: (locale: string) => getAddDeliveryAddressPageUrl(locale),
    label: 'Add delivery address',
  },
];

const privateRoutes: RouteWithChildrenInterface[] = [
  {
    element: (
      <PrivateRouteGuard>
        <HomePage />
      </PrivateRouteGuard>
    ),
    path: (locale: string) => getHomePageUrl(locale),
  },
  {
    element: (
      <PrivateRouteGuard>
        <DeliveryTimePage />
      </PrivateRouteGuard>
    ),
    path: (locale: string) => getDeliveryTimePageUrl(locale),
  },
  {
    element: (
      <PrivateRouteGuard>
        <DeliveryAddressPage />
      </PrivateRouteGuard>
    ),
    path: (locale: string) => getDeliveryAddressPageUrl(locale),
    children: deliveryAddressRoutes,
  },
  {
    element: (
      <PrivateRouteGuard>
        <EditCardMessagePage />
      </PrivateRouteGuard>
    ),
    path: (locale: string) => getEditCardMessagePageUrl(locale),
  },
  {
    element: (
      <RestrictedRouteGuard requiredPermissions="customerCare">
        <CustomCarePage />
      </RestrictedRouteGuard>
    ),
    path: (locale: string) => getCustomerCarePageUrl(locale),
  },
];

export const allRoutes = [...publicRoutes, ...privateRoutes];

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
