import { createSlice } from '@reduxjs/toolkit';
//interfaces
import { AppSliceInitialState } from '@/ts/store/app/AppEntityInterfaces';

const initialState: AppSliceInitialState = {
  testString: 'Initial test',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTestString: (state) => {
      state.testString = 'Final test';
    },
  },
});

export const { updateTestString } = appSlice.actions;
export default appSlice.reducer;
