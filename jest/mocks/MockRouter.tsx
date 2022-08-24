import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const MockRouter = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default MockRouter;
