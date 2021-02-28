import * as actionTypes from '../types/actionTypes';
import initialState from './initialState';

export default function  AuthorReducer (state = initialState.authors, action)
{
    switch(action.type)
    {
        case actionTypes.LOAD_AUTHORS:
            return action.authors;
            
        default:
            return state;
    }
}