import * as actionTypes from '../types/actionTypes';
import * as authorApi from '../../api/authorApi';
import {beginApiCall, apiCallError} from './apiStatusAction'


export function loadAuthors(){
  return function (dispatch){
    dispatch(beginApiCall())
    return authorApi.getAuthors()
    .then(authors =>
      {
        dispatch(loadAuthorsSuccess(authors))
      })
      .catch(err => {
        dispatch(apiCallError(err))
        throw err;
      })
  }
}

function loadAuthorsSuccess(authors){
  return { type: actionTypes.LOAD_AUTHORS, authors}
}
