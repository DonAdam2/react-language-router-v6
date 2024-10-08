/* eslint-disable @typescript-eslint/no-require-imports */

import { configureStore } from '@reduxjs/toolkit';
//root reducer
import { reduxSlices } from './rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const isDevelopment = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: reduxSlices,
  devTools: isDevelopment,
  middleware: (getDefaultMiddleware) => {
    if (isDevelopment) {
      const { logger } = require('redux-logger');

      return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
