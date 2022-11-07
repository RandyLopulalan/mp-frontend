import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = []
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    getData: (state, action) => {
      state.data = action.payload
    }
  }
});

export const { reset, getData } = dataSlice.actions;

export default dataSlice.reducer;