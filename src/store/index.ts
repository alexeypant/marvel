import { applyMiddleware, compose, createStore } from 'redux';
import { charactersRequestReducer } from './reducers/charactersRequestReducer';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(charactersRequestReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
