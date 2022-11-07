import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageState: "detail",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    getPage: (state, action) => {
      state.pageState = action.payload
    }
  }
});

export const { reset, getPage } = commonSlice.actions;

export default commonSlice.reducer;