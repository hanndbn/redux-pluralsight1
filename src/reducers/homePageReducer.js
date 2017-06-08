import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function homePageReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COUSRSES_SUCCESS:
      return objectAssign({}, state, {
        courses: action.courses
      });
    default:
      return state;
  }
}
