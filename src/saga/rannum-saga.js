// import { all, fork } from 'redux-saga/effects';
// import createSaga from "../utils/createSaga";

// const watchCall = createSaga("CALL_DATA", "http://localhost:4321", "get");

// export default function* ranNumSaga() {
//     yield all([
//         fork(watchCall)
//     ]);
// }


import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { CALL_DATA_REQUEST, callDataSuccess, callDataFailure } from "../actions";

function* fetchCallData() {
    const { data } = yield axios.get("http://localhost:4321");
    try {
        yield put(callDataSuccess(data));
    } catch (error) {
        yield put(callDataFailure(data))
    }
}

function* watchCall() {
    yield takeEvery(CALL_DATA_REQUEST, fetchCallData);
}

// export default function* ranNumSaga() {
//     yield all([
//         fork(watchCall)
//     ]);
// }
export default function* ranNumSaga() {
    yield call(watchCall);
}