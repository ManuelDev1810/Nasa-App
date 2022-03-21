import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OPPORTUNITY_API } from "../constans/api";

const initialState = {
  opportunities: [],
};

export const getOpportunities = createAsyncThunk(
  "curiosity/getOpportunities",
  async (filters) => {
    const response = await fetch(`${OPPORTUNITY_API}${filters}`);
    const data = await response.json();
    return data;
  }
);

export const opportunitySlice = createSlice({
  name: "Opportunities",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Opportunities
    builder.addCase(getOpportunities.fulfilled, (state, action) => {
      const opportunities = action.payload.photos;
      state.opportunities = opportunities;
    });
  },
});

export default opportunitySlice.reducer;
