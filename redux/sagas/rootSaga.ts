import {all, put, takeLatest} from "@redux-saga/core/effects";

function* rootSaga() {
    yield all([
        exampleSagas(),
    ])
}

/**
 * A SIMPLE EXAMPLE OF SAGA
 */

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

/**
 * END
 */

export default rootSaga;