import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionsReducer from './reducers/questions';
import rootWatcher from './saga/saga';

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    questions: questionsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootWatcher);

export default store;