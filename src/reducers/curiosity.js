import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CURIOSITY_API } from "../constans/api";

const initialState = {
  curiosities: [],
};

export const getCuriosities = createAsyncThunk("curiosity/getCuriosities", async (filters) => {
  const response = await fetch(
    `${CURIOSITY_API}${filters}`
  );
  const data = await response.json();
  return data;
});

export const curiositySlice = createSlice({
  name: "curiosities",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Curiosities
    builder.addCase(getCuriosities.fulfilled, (state, action) => {
      const curiosities = action.payload.photos;
      state.curiosities = curiosities;
    });
  },
});

export default curiositySlice.reducer;
