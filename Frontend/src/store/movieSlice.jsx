import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        info:null
    },
    
    reducers: {
        loadmovie: (state, action) => {
            state.info = action.payload
            
        },
        removemovie: (state, action) => {
            state.info = null
            
        }
    }
})

export const { loadmovie, removemovie } = movieSlice.actions
export default movieSlice.reducer