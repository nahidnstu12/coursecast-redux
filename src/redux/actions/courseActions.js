import * as actionTypes from '../types/actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) 
{
  return { type: actionTypes.COURSE_CREATE, course };
}

export function loadCourse(){
  return function (dispatch){
    return courseApi.getCourses()
    .then(courses =>
      {
        dispatch(loadCourseSuccess(courses))
      })
      .catch(err => {
        throw err;
      })
  }
}

function loadCourseSuccess(course){
  return { type: actionTypes.LOAD_COURSE, course}
}
