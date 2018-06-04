import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

export function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware( ...middlewares )
        )
    );
}

