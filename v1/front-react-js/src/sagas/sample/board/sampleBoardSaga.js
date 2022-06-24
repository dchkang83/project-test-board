// import { all, call, fork, getContext, put, take } from 'redux-saga/effects';
// import { all, call, fork, put, take } from 'redux-saga/effects';
import { all, call, retry, fork, put, take, select } from 'redux-saga/effects';
// import history from '~/utils/history';
// import { useNavigate } from 'react-router-dom';

import qs from "query-string";

import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice';
import axios from '~/utils/axios';

// const navigate = useNavigate();


const SECOND = 1000;
function apiGetSampleBoardList(requestParams) {
  // return axios.get(`boards`);
  console.log(`boards?${qs.stringify(requestParams)}`);
  return axios.get(`boards?${qs.stringify(requestParams)}`);
}

function apiGetSampleBoard(id) {
  console.log('apiGetSampleBoard id : ', `boards/${id}`);
  return axios.get(`boards/${id}`);
}

function apiPutSampleBoard(requestBody) {
  return axios.put(`boards/${requestBody?.id}`, requestBody);
}

function apiPostSampleBoard(requestBody) {
  return axios.post(`boards/`, requestBody);
}

function apiDeleteSampleBoard(id) {
  return axios.delete(`boards/${id}`);
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

function* asyncUpdateSampleBoardViews(action) {
  try {
      const response = yield call(apiPutSampleBoard, {
          ...action.payload,
          views: parseInt(action.payload?.views ?? 0) + 1,
          updateDate: Date.now()
      });
      if (response?.status === 200) {
          yield put(sampleBoardActions.updateSampleBoardViewsSuccess(response));
      } else {
          yield put(sampleBoardActions.updateSampleBoardViewsFail(response));
      }
  } catch(e) {
      console.error(e);
      yield put(sampleBoardActions.updateSampleBoardViewsFail(e?.response));
  }
}

function* asyncPostSampleBoard(action) {
  try {
      // const history = yield getContext("history"); // react-router-dom 의 BrowserRouter 에서는 안 됨
      const response = yield call(apiPostSampleBoard, {
          ...action.payload,
          id: 0,
          views: 0,
          insertDate: Date.now(),
          updateDate: Date.now()
      });
      if (response?.status === 201) {
          yield put(sampleBoardActions.postSampleBoardSuccess());

          // TOOD. 나중에 보자
          // history.push(`/board/${response?.data?.id ?? 0}`);
          // navigate(`/board/${response?.data?.id ?? 0}`);
      } else {
          yield put(sampleBoardActions.postSampleBoardFail(response));
          yield alert(`등록실패 \n Error: ${response.status}, ${response.statusText}`);
      }
  } catch(e) {
      console.error(e);
      yield put(sampleBoardActions.postSampleBoardFail(e?.response));
      yield alert(`등록실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
  }
}

function* asyncSetSampleBoard(action) {
  try {

      const response = yield call(apiGetSampleBoard, action.payload?.id);
      if (response?.status === 200) {
          yield call(action.payload?.setSampleBoard, response?.data ?? {});
      } else {
          yield alert(`불러오기 실패 Error: ${response.status}, ${response.statusText}`);

          // TOOD. 나중에 보자
          // history.goBack();
          // navigate(-1);
      }
  } catch(e) {
      console.error(e);
      yield alert(`불러오기 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);

      // TOOD. 나중에 보자
      // history.goBack();
      // navigate(-1);
  }
}

function* asyncPutSampleBoard(action) {
  try {
      const response = yield call(apiPutSampleBoard, {
          ...action.payload,
          updateData: Date.now()
      });
      if (response?.status === 200) {
          yield put(sampleBoardActions.putSampleBoardSuccess());

          // TOOD. 나중에 보자
          // history.push(`/board/${response?.data?.id ?? 0}`);
          // navigate(`/board/${response?.data?.id ?? 0}`);
      } else {
          yield put(sampleBoardActions.putSampleBoardFail(response));
          yield alert(`수정실패 \n Error: ${response.status}, ${response.statusText}`);
      }
  } catch(e) {
      console.error(e);
      yield put(sampleBoardActions.putSampleBoardFail(e?.response));
      yield alert(`수정실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
  }
}

function* asyncDeleteSampleBoard() {
  try {
      const sampleBoard = yield select((state) => state.sampleBoardReducer.sampleBoard);
      const response = yield call(apiDeleteSampleBoard, sampleBoard?.id ?? 0);
      if (response?.status === 200) {
          yield put(sampleBoardActions.deleteSampleBoardSuccess());
          alert("삭제되었습니다!");

          // TOOD. 나중에 보자
          // history.push(`/board/${sampleBoard?.id ?? 0}`);
          // navigate(`/board/${sampleBoard?.id ?? 0}`);
      } else {
          alert('error case 1');
          yield put(sampleBoardActions.deleteSampleBoardFail(response));
      }
  } catch(e) {
      alert('error case 2');
      console.error(e);
      yield put(sampleBoardActions.deleteSampleBoardFail(e?.response));
      yield alert(`삭제실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
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


function* watchUpdateSampleBoardViews() {
  while(true) {
      const action = yield take(sampleBoardActions.updateSampleBoardViews);
      yield call(asyncUpdateSampleBoardViews, action);
  }
}

function* watchPostSampleBoard() {
  while(true) {
      const action = yield take(sampleBoardActions.postSampleBoard);
      yield call(asyncPostSampleBoard, action);
  }
}

function* watchSetSampleBoard() {
  while(true) {
      const action = yield take(sampleBoardActions.setSampleBoard);
      yield call(asyncSetSampleBoard, action);
  }
}

function* watchPutSampleBoard() {
  while(true) {
      const action = yield take(sampleBoardActions.putSampleBoard);
      yield call(asyncPutSampleBoard, action);
  }
}

function* watchDeleteSampleBoard() {
  while(true) {
      yield take(sampleBoardActions.deleteSampleBoard);
      yield call(asyncDeleteSampleBoard);
  }
}


export default function* sampleBoardSaga() {
  yield all([
    fork(watchGetSampleBoardList), fork(watchGetSampleBoard),
    fork(watchUpdateSampleBoardViews), fork(watchPostSampleBoard),
    fork(watchSetSampleBoard), fork(watchPutSampleBoard), fork(watchDeleteSampleBoard)
    , fork(watchGetSampleBoard), fork(watchPostSampleBoard), fork(watchPutSampleBoard), fork(watchDeleteSampleBoard)
  ]);
}