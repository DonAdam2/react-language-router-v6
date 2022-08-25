import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
// slices
import app from './app/reducers/AppReducer';
/* PLOP_INJECT_IMPORT */

export const rootReducer = combineReducers({
  app,
  /* PLOP_INJECT_REDUCER_SLICE */
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
