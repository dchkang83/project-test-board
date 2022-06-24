import { createSlice } from "@reduxjs/toolkit";

const name = "board";

const initialState = {
    sampleBoardList: [],

    // TODO. attache test
    board: {},
    status: 0,
    statusText: "Loading"
};

const reducers = {
    getSampleBoardList: (state, action) => { },
    getSampleBoardListSuccess: (state, action) => {
        state.sampleBoardList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getSampleBoardListFail: (state, action) => {
        state.sampleBoardList = initialState.sampleBoardList
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    getSampleBoard: (state, action) => {
        console.log("게시글 조회 액션 호출 -- getSampleBoard"); // saga에서 감시용
    },
    getSampleBoardSuccess: (state, action) => {
        state.sampleBoard = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getSampleBoardFail: (state, action) => {
        state.sampleBoard = initialState.sampleBoard
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },
    
    updateSampleBoardViews: (state, action) => {},
    updateSampleBoardViewsSuccess: (state, action) => {
        state.sampleBoard = action.payload?.data ?? {};
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    updateSampleBoardViewsFail: (state, action) => {
        state.sampleBoard = initialState.sampleBoard;
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    postSampleBoard: (state, action) => {},
    postSampleBoardSuccess: (state, action) => {},
    postSampleBoardFail: (state, action) => {
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    setSampleBoard: (state, action) => {},

    putSampleBoard: (state, action) => {},
    putSampleBoardSuccess: (state, action) => {},
    putSampleBoardFail: (state, action) => {
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    deleteSampleBoard: (state, action) => {},
    deleteSampleBoardSuccess: (state, action) => {
        state.sampleBoard = initialState.sampleBoard;
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    deleteSampleBoardFail: (state, action) => {
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

};

const sampleBoardSlice = createSlice({
    name,
    initialState,
    reducers
});

export const sampleBoardReducer = sampleBoardSlice.reducer;
export const sampleBoardActions = sampleBoardSlice.actions;