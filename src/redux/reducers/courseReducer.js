import * as actionTypes from '../types/actionTypes';
import initialState from './initialState';

export default function  CourseReducer (state = initialState.courses, action)
{
    switch(action.type)
    {
        case actionTypes.COURSE_CREATE:
            return [...state,{...action.course}];
        
        case actionTypes.COURSE_CREATE_SUCCESS:
            return [...state,{...action.course}];

        case actionTypes.UPDATE_COURSE_SUCCESS:
            return state.map(course => 
                course.id === action.course.id ? action.course : course
                );

        case actionTypes.LOAD_COURSE:
            return action.courses;
            
        default:
            return state;
    }
}