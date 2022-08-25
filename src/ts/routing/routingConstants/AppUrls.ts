export const getHomePageUrl = (locale: string) => `/${locale}/home`;

export const getDeliveryTimePageUrl = (locale: string) => `/${locale}/delivery-time`;

export const getDeliveryAddressPageUrl = (locale: string) => `/${locale}/delivery-address`;

export const getAddDeliveryAddressPageUrl = (locale: string) =>
  `${getDeliveryAddressPageUrl(locale)}/add`;

export const getEditCardMessagePageUrl = (locale: string) => `/${locale}/edit-card-message`;

export const getCustomerCarePageUrl = (locale: string) => `/${locale}/customer-care`;

export const getLoginPageUrl = (locale: string) => `/${locale}/login`;

export const getAboutUsPageUrl = (locale: string) => `/${locale}/about-us`;

export const getContactUsPageUrl = (locale: string) => `/${locale}/contact-us`;
