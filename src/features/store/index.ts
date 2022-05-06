import {configureStore} from "@reduxjs/toolkit";
import {addMovieSlice} from "../addMovie/addMovie-slice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        addMovie: addMovieSlice.reducer
    },
    middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
