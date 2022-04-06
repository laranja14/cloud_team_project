import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import watchCall from './rannum-saga';
import matchSaga from './match-saga';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield spawn(watchCall);
    yield all([
        fork(matchSaga)
    ]);
}