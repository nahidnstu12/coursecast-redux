import * as actionTypes from '../types/actionTypes';
import * as authorApi from '../../api/authorApi';


export function loadAuthors(){
  return function (dispatch){
    return authorApi.getAuthors()
    .then(authors =>
      {
        dispatch(loadAuthorsSuccess(authors))
      })
      .catch(err => {
        throw err;
      })
  }
}

function loadAuthorsSuccess(authors){
  return { type: actionTypes.LOAD_AUTHORS, authors}
}
