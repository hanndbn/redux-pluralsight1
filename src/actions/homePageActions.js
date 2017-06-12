import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COUSRSES_SUCCESS,
    courses
  };
}

export function updateCoursesSuccess(courses) {
  return {
    type: types.UPDATE_COUSRSES_SUCCESS,
    courses
  };
}

export function createCoursesSuccess(courses) {
  return {
    type: types.ADD_COUSRSES_SUCCESS,
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

export function createCourse(course) {
  return function (dispatch) {
    return courseApi.saveCourse(course).then(savedCourses => {
      course.id ? dispatch(updateCoursesSuccess(savedCourses)):
      dispatch(createCoursesSuccess(savedCourses));
    }).catch(error => {
      throw (error);
    });
  };
}

