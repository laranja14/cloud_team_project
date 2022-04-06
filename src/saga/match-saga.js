import { all, fork } from 'redux-saga/effects';
import createSaga from "../utils/createSaga";

const matchGet = createSaga("CALL_MATCH", "http://localhost:4321/match", "get");

export default function* matchSaga() {
    yield all([
        fork(matchGet)
    ]);
}
