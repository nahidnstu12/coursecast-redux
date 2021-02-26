// Set up your root reducer here...
import { combineReducers } from 'redux';
import  courses  from './courseReducer';

const createRootReducer = combineReducers(
    { courses }
)
export default createRootReducer;