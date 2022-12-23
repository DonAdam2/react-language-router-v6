import React, { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

function renderWithRouter(ui: ReactElement, { ...renderOptions }: RenderOptions = {}) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <BrowserRouter>{children}</BrowserRouter>;
  }

  // Return an object with the all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithRouter;
