// import { all, call, retry, fork, put, take, select, getContext } from 'redux-saga/effects';
import { all, call, retry, fork, put, take } from 'redux-saga/effects';
import qs from "query-string";

import { articleActions } from '../../slices/board/articleSlice';
import axios from '../../utils/axios';
// import history from '../utils/history';

const SECOND = 1000;


function apiGetArticleList(requestParams) {
  return axios.get(`articles?${qs.stringify(requestParams)}`);
}


// api 서버 연결 후 action 호출
function* asyncGetArticleList(action) {
  try {
    // const response = yield call(apiGetArticleList, { boardId: action.payload });
    const response = yield retry(3, 10 * SECOND, apiGetArticleList, { boardId: action.payload });
    if (response?.status === 200) {
      yield put(articleActions.getArticleListSuccess(response));
    } else {
      yield put(articleActions.getArticleListFail(response));
    }
  } catch (e) {
    yield put(articleActions.getArticleListFail(e.response));
  }
}

// action 호출을 감시하는 watch 함수
function* watchGetArticleList() {
  while (true) {
    const action = yield take(articleActions.getArticleList);
    yield call(asyncGetArticleList, action);
  }
}

export default function* articleSaga() {
  // yield all([fork(watchGetArticleList), fork(watchGetArticle),
  //     fork(watchUpdateArticleViews), fork(watchPostArticle),
  //     fork(watchSetArticle), fork(watchPutArticle), fork(watchDeleteArticle)]);
  yield all([
    fork(watchGetArticleList)
  ]);
}