// import { all, fork } from 'redux-saga/effects';
// import createSaga from "../utils/createSaga";

// const watchMatch = createSaga("CALL_MATCH", "http://localhost:4321/match", "get");

import { call, spawn, all, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CALL_MATCH_REQUEST, callMatchFailure, callMatchSuccess } from "../actions";

function* fetchCallMatch() {
    // const { data } = yield axios.get("http://localhost:4321/league");
    const { data } = yield axios.get("http://k8s-default-loljoain-944d977a4c-1077623173.ap-northeast-2.elb.amazonaws.com/league/schedule/all?category=lck");
    try {
        console.log(data)
        yield put(callMatchSuccess(data));
    } catch (error) {
        yield put(callMatchFailure(data))
    }
}


function* watchMatch() {
    yield takeEvery(CALL_MATCH_REQUEST, fetchCallMatch);
}

export default function* matchSaga() {
    yield spawn(watchMatch);
}

// export default function* matchSaga() {
//     yield all([
//         fork(watchMatch)
//     ]);
// }