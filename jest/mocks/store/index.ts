import { configureStore, PreloadedState } from '@reduxjs/toolkit';
//root reducer
import { rootReducer } from '@/ts/store/rootReducer';
//root state
import { RootState } from '@/ts/store/store';

// Create a replica of the actual store without redux dev tools
const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    devTools: false,
    preloadedState,
  });

export default setupStore;
