import { call, all, fork, spawn } from 'redux-saga/effects';

import ranNumSaga from './rannum-saga';
import matchSaga from './match-saga';

import axios from 'axios';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
        call(matchSaga),
        call(ranNumSaga)
    ]);
}