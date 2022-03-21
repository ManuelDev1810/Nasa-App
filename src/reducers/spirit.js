import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SPIRIT_API } from "../constans/api";

const initialState = {
    spirits: [],
};

export const getSpirits = createAsyncThunk(
    "spirit/getSpirits",
    async (filters) => {
        const response = await fetch(`${SPIRIT_API}${filters}`);
        const data = await response.json();
        return data;
    }
);

export const spiritSlice = createSlice({
    name: "spirits",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
    //Spirits
        builder.addCase(getSpirits.fulfilled, (state, action) => {
            const spirits = action.payload.photos;
            //Sorting the latest photos
            spirits.sort((a, b) => b.id - a.id);
            state.spirits = spirits;
        });
        builder.addCase(getSpirits.rejected, (state) => {
            state.spirits = [];
        });
    },
});

export default spiritSlice.reducer;
