import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"

import articleSaga from "../sagas/board/articleSaga";
import boardSaga from "../sagas/board/boardSaga";

let combineSagas = {};
combineSagas = Object.assign(combineSagas, { articleSaga, boardSaga });
// combineSagas = Object.assign(combineSagas, { articleSaga });

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}