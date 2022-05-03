import {createSlice} from "@reduxjs/toolkit";

interface AddMovieSlice {
    visible: 'hidden' | 'visible';
}

const initialState: AddMovieSlice = {
    visible: 'hidden',
}

interface SetVisibility {
    payload: 'hidden' | 'visible';
}

export const addMovieSlice = createSlice({
    name: 'addMovie',
    initialState,
    reducers: {
        setVisibility: (state, action: SetVisibility) => {
            state.visible = action.payload;
        }
    }
})

export const {setVisibility} = addMovieSlice.actions
