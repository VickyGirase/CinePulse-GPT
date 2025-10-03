import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        setGpt: (state) => {
            state.gptToggle = !state.gptToggle;
        },
        addGptMovieResult: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
})

export const {setGpt,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;