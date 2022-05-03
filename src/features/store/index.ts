import {configureStore} from "@reduxjs/toolkit";
import {addMovieSlice} from "../addMovie/addMovie-slice";

export const store = configureStore({
    reducer: {
        addMovie: addMovieSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
