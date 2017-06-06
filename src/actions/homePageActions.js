import * as types from '../constants/actionTypes';

export function saveMyName(myName) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_MY_NAME,
      myName
    });
  };
}
