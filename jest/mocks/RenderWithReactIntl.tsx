/*import React, { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
//interfaces
import { ExtendedRenderOptions } from '../interfaces/JestInterfaces';

function renderWithReactIntl(
  ui: ReactElement,
  { locale = 'en', ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  }

  // Return an object with the all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithReactIntl;*/
export {};
