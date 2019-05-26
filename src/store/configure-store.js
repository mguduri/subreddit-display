import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    /* istanbul ignore next */
    const enhancer = compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
        store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
