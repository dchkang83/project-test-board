import { combineReducers } from 'redux';

import { articleReducer } from '../slices/board/articleSlice';
import { boardReducer } from '../slices/board/boardSlice';

const rootReducer = combineReducers({
  articleReducer,
  boardReducer
});
// const rootReducer = combineReducers({ articleReducer });

export default rootReducer;