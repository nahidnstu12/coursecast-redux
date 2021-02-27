import {createStore, applyMiddleware,compose } from 'redux';
import createRootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState)
{
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        createRootReducer,
        initialState,
        composeEnhancer( applyMiddleware(thunk,reduxImmutableStateInvariant()))
    )
}

