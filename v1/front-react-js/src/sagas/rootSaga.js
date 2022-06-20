import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"

import sampleBoardSaga from "~/sagas/sample/board/sampleBoardSaga";
import articleSaga from "~/sagas/board/articleSaga";
import boardSaga from "~/sagas/board/boardSaga";

let combineSagas = {};
combineSagas = Object.assign(combineSagas, { sampleBoardSaga, articleSaga, boardSaga });
// combineSagas = Object.assign(combineSagas, { articleSaga });

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}