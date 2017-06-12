import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function homePageReducer(state = initialState.homePage, action) {
  switch (action.type) {
    case types.LOAD_COUSRSES_SUCCESS:
      return objectAssign({}, state, {
        courses: action.courses
      });
    case types.UPDATE_COUSRSES_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.courses)];
    case types.ADD_COUSRSES_SUCCESS:
      return [...state, Object.assign({}, action.courses)];
    default:
      return state;
  }
}
