import React, { ReactNode } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
// default store
import store from './store';

interface MockProviderInterface {
  mockStore?: Store;
  children: ReactNode;
}

const MockReduxProvider = ({ children, mockStore = store }: MockProviderInterface) => (
  <Provider store={mockStore}>{children}</Provider>
);

export default MockReduxProvider;
