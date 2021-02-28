// Set up your root reducer here...
import { combineReducers } from 'redux';
import  courses  from './courseReducer';
import authors from './authorReducer'

const createRootReducer = combineReducers(
    { 
        courses,
        authors
    
    }
)
export default createRootReducer;