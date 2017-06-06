import {SAVE_MY_NAME} from '../constants/actionTypes';
import objectAssign from 'object-assign';

let initialState = {
  myName: ''
};

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MY_NAME:
      return objectAssign({}, state, {
        myName: action.myName
      });
    default:
      return state;
  }
}
