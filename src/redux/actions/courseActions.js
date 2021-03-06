import * as actionTypes from '../types/actionTypes';
import * as courseApi from '../../api/courseApi';
import {beginApiCall, apiCallError} from './apiStatusAction'

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

function loadCourseSuccess(courses){
  return { type: actionTypes.LOAD_COURSE, courses}
}

export function deleteCourseOptimistics(course){
  return { 
    type: actionTypes.COURSE_DELETE_OPTIMISTIC,
    course
  }
}

export function loadCourse(){
  return function (dispatch){
    dispatch(beginApiCall())
    return courseApi.getCourses()
    .then(courses =>
      {
        dispatch(loadCourseSuccess(courses))
      })
      .catch(err => {
        dispatch(apiCallError(err))
        throw err;
      })
  }
}

export function saveCourse(course){
  return function (dispatch){
    //function (dispatch, getState) getState use for access redux store data
    dispatch(beginApiCall())
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id 
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse))
      })
      .catch(err => {
        dispatch(apiCallError(err))
        throw err
      })

  }
}

export function deleteCourse(course){
  return function (dispatch){
    dispatch(deleteCourseOptimistics(course))
    return courseApi.deleteCourse(course.id)

    
  }
}
