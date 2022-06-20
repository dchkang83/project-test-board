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
    getSampleBoardList: (state, action) => {},
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

    getSampleBoard: (state, action) => {},
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

};

const sampleBoardSlice = createSlice({
    name,
    initialState,
    reducers
});

export const sampleBoardReducer = sampleBoardSlice.reducer;
export const sampleBoardActions = sampleBoardSlice.actions;