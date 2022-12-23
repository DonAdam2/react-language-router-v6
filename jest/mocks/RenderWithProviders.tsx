import React, { PropsWithChildren, ReactElement } from 'react';
// import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
//store
import setupStore from '@/jest/mocks/store';
//interfaces
import { ExtendedRenderOptions } from '@/jest/interfaces/JestInterfaces';

function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    locale = 'en',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      // <IntlProvider locale={locale}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
      // </IntlProvider>
    );
  }

  // Return an object with the all of RTL's query functions
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export default renderWithProviders;
