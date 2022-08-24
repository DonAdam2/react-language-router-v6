import { State } from '../../rootReducer';

export const getTestAction = (state: State) => state.app.testString;

//replace the following with your own selector
export const getAppUserPermissionsList = (state: State) => {
  console.log(state);
  return ['search'];
};
