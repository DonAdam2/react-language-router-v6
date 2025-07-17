import React, { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//interfaces
import { ExtendedRenderOptions } from '../interfaces/JestInterfaces';

// Initialize i18n for tests
const initI18nForTests = () => {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      lng: 'en',
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: {
            'homePage.title': 'Home page',
            'header.login': 'Login',
            'header.aboutUs': 'About us',
            'header.contactUs': 'Contact us',
            'header.home': 'Home',
            'header.logout': 'Logout',
            'header.deliveryTime': 'Delivery time',
            'header.deliveryAddress': 'Delivery address',
            'header.editCard': 'Edit card',
            'header.customerCare': 'Customer care',
          },
        },
      },
      react: {
        useSuspense: false,
      },
    });
  }
  return i18n;
};

function renderWithReactI18Next(
  ui: ReactElement,
  { locale = 'en', ...renderOptions }: ExtendedRenderOptions = {}
) {
  const i18nInstance = initI18nForTests();

  function Wrapper({ children }: PropsWithChildren): React.JSX.Element {
    return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
  }

  // Return an object with all of RTL's query functions
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Export the initialization function for use in jest-setup
export { initI18nForTests };
export default renderWithReactI18Next;
