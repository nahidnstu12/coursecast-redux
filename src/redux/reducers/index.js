// Set up your root reducer here...
import { combineReducers } from 'redux';
import  courses  from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';

const createRootReducer = combineReducers(
    { 
        courses,
        authors,
        apiCallsInProgress
    
    }
)
export default createRootReducer;