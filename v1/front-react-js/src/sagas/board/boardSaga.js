// import { all, call, fork, getContext, put, take } from 'redux-saga/effects';
// import { all, call, fork, put, take } from 'redux-saga/effects';
import { all, call, retry, fork, put, take } from 'redux-saga/effects';

import qs from "query-string";

import { boardActions } from '~/slices/board/boardSlice';
import axios from '~/utils/axios';

const SECOND = 1000;
function apiGetBoardList(requestParams) {
  // return axios.get(`boards`);

  console.log(`boards?${qs.stringify(requestParams)}`);
  return axios.get(`boards?${qs.stringify(requestParams)}`);
}

function apiGetBoard(boardId) {
  console.log('apiGetBoard boardId : ', `boards/${boardId}`);

  // const aaa = axios.get(`boards/${boardId}`);
  // console.log(aaa);

  return axios.get(`boards/${boardId}`);
}

// api 서버 연결 후 action 호출
function* asyncGetBoardList(action) {
  try {
    // const response = yield call(apiGetBoardList);
    const response = yield retry(3, 10 * SECOND, apiGetBoardList, { boardType: action.payload });

    if (response?.status === 200) {
      yield put(boardActions.getBoardListSuccess(response));
    } else {

      yield put(boardActions.getBoardListFail(response));
    }
  } catch (e) {
    console.error(e);
    yield put(boardActions.getBoardListFail(e.response));
  }
}

function* asyncGetBoard(action) {
    try {
      // TODO. test
      // console.log('action.payload : ', action.payload);

        const response = yield call(apiGetBoard, action.payload);
        if (response?.status === 200) {
            yield put(boardActions.getBoardSuccess(response));
        } else {
            yield put(boardActions.getBoardFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(boardActions.getBoardFail(e.response));
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetBoardList() {
  while (true) {
    // yield take(boardActions.getBoardList);
    // TODO. 작업중
    const action = yield take(boardActions.getBoardList);
    yield call(asyncGetBoardList, action);
  }
}

function* watchGetBoard() {
  while(true) {
      const action = yield take(boardActions.getBoard);
      yield call(asyncGetBoard, action);
  }
}

export default function* boardSaga() {
  yield all([
    fork(watchGetBoardList),
    fork(watchGetBoard)
    //, fork(watchGetBoard), fork(watchPostBoard), fork(watchPutBoard), fork(watchDeleteBoard)
  ]);
}