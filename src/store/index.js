import { configureStore } from "@reduxjs/toolkit";
import { spiritSlice } from "../reducers/spirit";
import { curiositySlice } from "../reducers/curiosity";
import { opportunitySlice } from "../reducers/opportunity";

const store = configureStore({
  reducer: {
    spirits: spiritSlice.reducer,
    curiosities: curiositySlice.reducer,
    opportunities: opportunitySlice.reducer,
  },
});

export default store;
