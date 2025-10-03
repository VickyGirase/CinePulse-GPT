import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        info:null
    },

    reducers: {
        loadtv: (state, action) => {
            state.info = action.payload
        },
        removetv: (state, action) => {
            state.info = action.payload
    }

    }
})

export const { loadtv, removetv } = tvSlice.actions
export default tvSlice.reducer