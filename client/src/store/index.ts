import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { charactersRequestReducer } from './reducers/characters';

export const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(charactersRequestReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
