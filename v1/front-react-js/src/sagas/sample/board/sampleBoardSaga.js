// import { all, call, fork, getContext, put, take } from 'redux-saga/effects';
// import { all, call, fork, put, take } from 'redux-saga/effects';
import { all, call, retry, fork, put, take } from 'redux-saga/effects';

import qs from "query-string";

import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice';
import axios from '~/utils/axios';

const SECOND = 1000;
function apiGetSampleBoardList(requestParams) {
  // return axios.get(`boards`);
  console.log(`boards?${qs.stringify(requestParams)}`);
  return axios.get(`boards?${qs.stringify(requestParams)}`);
}

function apiGetSampleBoard(boardId) {
  console.log('apiGetSampleBoard boardId : ', `boards/${boardId}`);
  return axios.get(`boards/${boardId}`);
}

// api 서버 연결 후 action 호출
function* asyncGetSampleBoardList(action) {
  try {
    // const response = yield call(apiGetSampleBoardList);
    const response = yield retry(3, 10 * SECOND, apiGetSampleBoardList, { boardType: action.payload });

    if (response?.status === 200) {
      yield put(sampleBoardActions.getSampleBoardListSuccess(response));
    } else {

      yield put(sampleBoardActions.getSampleBoardListFail(response));
    }
  } catch (e) {
    console.error(e);
    yield put(sampleBoardActions.getSampleBoardListFail(e.response));
  }
}

function* asyncGetSampleBoard(action) {
    try {
      // TODO. test
      // console.log('action.payload : ', action.payload);

        const response = yield call(apiGetSampleBoard, action.payload);
        if (response?.status === 200) {
            yield put(sampleBoardActions.getSampleBoardSuccess(response));
        } else {
            yield put(sampleBoardActions.getSampleBoardFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(sampleBoardActions.getSampleBoardFail(e.response));
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetSampleBoardList() {
  while (true) {
    // yield take(sampleBoardActions.getSampleBoardList);
    // TODO. 작업중
    const action = yield take(sampleBoardActions.getSampleBoardList);
    yield call(asyncGetSampleBoardList, action);
  }
}

function* watchGetSampleBoard() {
  while(true) {
      const action = yield take(sampleBoardActions.getSampleBoard);
      yield call(asyncGetSampleBoard, action);
  }
}

export default function* sampleBoardSaga() {
  yield all([
    fork(watchGetSampleBoardList),
    fork(watchGetSampleBoard)
    //, fork(watchGetSampleBoard), fork(watchPostSampleBoard), fork(watchPutSampleBoard), fork(watchDeleteSampleBoard)
  ]);
}