// action types
import { AppActionTypes } from './AppActionTypes';
/* PLOP_INJECT_ACTION_INTERFACE */

interface TestAction {
  type: AppActionTypes.TEST_ACTION;
}

export type Action =
  /* PLOP_INJECT_ACTION */
  TestAction;
