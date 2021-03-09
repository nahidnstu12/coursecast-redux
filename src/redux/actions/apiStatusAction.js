import * as actionTypes from '../types/actionTypes'

export function beginApiCall(){
    return { type: actionTypes.API_STATUS_BEGIN}
}

export function apiCallError(){
    return { type: actionTypes.API_CALL_ERROR }
}