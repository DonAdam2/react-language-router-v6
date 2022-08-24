//action types
import { AppActionTypes } from '../AppActionTypes';
//interfaces
import { Action } from '../AppActionsInterfaces';

export const setTestAction = (): Action => ({
  type: AppActionTypes.TEST_ACTION,
});
