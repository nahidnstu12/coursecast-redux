import * as actionTypes from '../types/actionTypes';
import initialState from './initialState';

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === actionTypes.API_STATUS_BEGIN) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

actionTypeEndsInSuccess(actionTypes.LOAD_AUTHORS)