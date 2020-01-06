import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import ReducerCategory from '../_reducer/ReducerCategory';
import ReducerEvent from '../_reducer/ReducerEvent';
import ReducerUser from '../_reducer/ReducerUser';
import ReducerOrder from '../_reducer/ReducerOrder';

const middlewares = [logger, promiseMiddleware];

const reducers = combineReducers ({
    ReducerCategory,
    ReducerEvent,
    ReducerUser,
    ReducerOrder
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store; 