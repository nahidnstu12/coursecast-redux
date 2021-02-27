import * as actionTypes from '../types/actionTypes';

export function createCourse(course) 
{
  return { type: actionTypes.COURSE_CREATE, course };
}
