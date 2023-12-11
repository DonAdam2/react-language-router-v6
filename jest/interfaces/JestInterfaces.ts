import { RenderOptions } from '@testing-library/react';
//root state
import { RootState } from '@/ts/store/store';
//mock store
import setupStore from '../mocks/store';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P];
};

/* This type interface extends the default options for render from RTL, as well
as allows the user to specify other things such as initialState, store. */
export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: DeepPartial<RootState>;
  store?: ReturnType<typeof setupStore>;
  locale?: string;
}
