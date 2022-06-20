import { combineReducers } from 'redux';

import { sampleBoardReducer } from '~/slices/sample/board/sampleBoardSlice';
import { articleReducer } from '~/slices/board/articleSlice';
import { boardReducer } from '~/slices/board/boardSlice';

const rootReducer = combineReducers({
  sampleBoardReducer,
  articleReducer,
  boardReducer
});
// const rootReducer = combineReducers({ articleReducer });

export default rootReducer;