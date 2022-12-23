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
import { TFunction } from 'i18next';

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

export const headerPublicRoutes = (t: TFunction): HeaderRouteInterface[] => [
  {
    label: t('header.aboutUs'),
    path: (locale: string) => getAboutUsPageUrl(locale),
  },
  {
    label: t('header.contactUs'),
    path: (locale: string) => getContactUsPageUrl(locale),
  },
];

export const headerPrivateRoutes = (t: TFunction): HeaderRouteInterface[] => [
  {
    label: t('header.home'),
    path: (locale: string) => getHomePageUrl(locale),
  },
  {
    label: t('header.deliveryTime'),
    path: (locale: string) => getDeliveryTimePageUrl(locale),
  },
  {
    label: t('header.deliveryAddress'),
    path: (locale: string) => getDeliveryAddressPageUrl(locale),
  },
  {
    label: t('header.editCard'),
    path: (locale: string) => getEditCardMessagePageUrl(locale),
  },
  {
    label: t('header.customerCare'),
    path: (locale: string) => getCustomerCarePageUrl(locale),
    permissions: 'customerCare',
  },
];

export const headerAuthRoutes = (t: TFunction): HeaderRouteInterface[] => [
  {
    label: t('header.login'),
    path: (locale: string) => getLoginPageUrl(locale),
  },
];
