import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

function configureStore(preloadedState: any, {isServer, req = null}: any) {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(sagaMiddleware)
    ) as any;

    if (req || !isServer) {
        store.sagaTask = sagaMiddleware.run(rootSaga)
    }

    return store
}

export default configureStore;