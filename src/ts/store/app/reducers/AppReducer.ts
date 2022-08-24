//action types
import { AppActionTypes } from '../AppActionTypes';
//constants
import { updateObject } from '@/ts/constants/Helpers';
//interfaces
import { Action } from '../AppActionsInterfaces';
import { AppReducerInitialState } from '../AppReducersInterfaces';

const initialState: AppReducerInitialState = {
  testString: 'Initial test',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AppActionTypes.TEST_ACTION:
      return updateObject(state, { testString: 'Final test' });
    default:
      return state;
  }
};

export default reducer;
