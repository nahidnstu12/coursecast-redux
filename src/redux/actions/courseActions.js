import * as actionTypes from '../types/actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) 
{
  return { type: actionTypes.COURSE_CREATE, course };
}

export function createCourseSuccess(course) 
{
  return { type: actionTypes.COURSE_CREATE_SUCCESS, course };
}

export function updateCourseSuccess(course) 
{
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

function loadCourseSuccess(course){
  return { type: actionTypes.LOAD_COURSE, course}
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

export function saveCourse(course){
  return function (dispatch){
    //function (dispatch, getState) getState use for access redux store data
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id 
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse))
      })
      .catch(err => {
        throw err
      })

  }
}


