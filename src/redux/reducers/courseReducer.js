import * as actionTypes from '../types/actionTypes';
import initialState from './initialState';

export default function  CourseReducer (state = initialState.courses, action)
{
    switch(action.type)
    {
        case actionTypes.COURSE_CREATE:
            return [...state,{...action.course}];

        case actionTypes.LOAD_COURSE:
            return action.course;
            
        default:
            return state;
    }
}