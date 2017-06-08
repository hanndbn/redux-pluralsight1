import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COUSRSES_SUCCESS,
    courses
  };
}


export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}
