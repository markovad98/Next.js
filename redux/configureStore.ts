import {createStore, applyMiddleware} from 'redux'
import { all, takeLatest, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga'

function* rootSaga() {
    yield all([
        exampleSagas(),
    ])
}

function* exampleSagas() {
    yield all([exampleDataFlow()]);
}

function* exampleDataFlow(): any {
    yield takeLatest('EXAMPLE_ACTION_TYPE', exampleSaga);
}

function* exampleSaga(): any {
    yield put({
        type: 'EXAMPLE_ACTION_TYPE_FROM_SAGA',
        payload: { foo: 'bar' },
    });
}

const rootReducer = (state = {foo: ''}, action: any) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
        default:
            return state
    }
};

function configureStore(preloadedState: any, {isServer, req = null}: any) {

    const sagaMiddleware = createSagaMiddleware()

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

export default configureStore