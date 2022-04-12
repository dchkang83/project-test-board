import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// import logger from "redux-logger";
import rootReducer from "../slices/rootReducer";
import rootSaga from "../sagas/rootSaga";
// import history from "./history";

const sagaMiddleware = createSagaMiddleware({
    // context: { history: history },
    context: {  },
});
const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    // middleware: [sagaMiddleware, logger],
    middleware: [sagaMiddleware],
    devTools: true,
    preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export default store;