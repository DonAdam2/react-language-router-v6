import { RootState } from '@/ts/store/store';

export const getTestAction = (state: RootState) => state.app.testString;

//replace the following with your own selector
export const getAppUserPermissionsList = (state: RootState) => {
  console.log(state);
  return ['search'];
};
