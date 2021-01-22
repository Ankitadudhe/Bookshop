import reducer from './reducers';
import {createStore ,applyMiddleware,compose} from 'redux';
import logger from 'redux-saga'
import createSagaMiddleware from 'redux-saga'

export default function configureStore(initialState={}){
const sagaMiddleware=createSagaMiddleware();

    let middlewares=[logger,sagaMiddleware];
const enhancers=[applyMiddleware(...middlewares)];

let composedEnhancers=compose(...enhancers)
    const store=createStore(
        reducer,
        // initialState,
        // composedEnhancers
    );
    return store;
}