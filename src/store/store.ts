import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import questionsReducer from './reducers/questions';
import rootWatcher from './saga/saga';

const saga = createSagaMiddleware();

export const rootReducer = combineReducers({
    questions: questionsReducer
});

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootWatcher);

export default store;