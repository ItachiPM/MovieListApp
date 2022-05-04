import {createSlice} from "@reduxjs/toolkit";

interface AddMovieSlice {
    visible: 'hidden' | 'visible';
    genreArray: string[];
    genre: string;
}

const initialState: AddMovieSlice = {
    visible: 'hidden',
    genreArray: [],
    genre: '',
}

interface SetVisibility {
    payload: 'hidden' | 'visible';
}

interface SetGenreArray {
    payload: string[];
}

interface SetGenre {
    payload: string;
}

export const addMovieSlice = createSlice({
    name: 'addMovie',
    initialState,
    reducers: {
        setVisibility: (state, action: SetVisibility) => {
            state.visible = action.payload;
        },
        setGenreArray: (state, action: SetGenreArray) => {
            state.genreArray = action.payload;
        },
        setGenre: (state, action: SetGenre) => {
            state.genre = action.payload;
        },
    }
})

export const {setVisibility, setGenreArray, setGenre} = addMovieSlice.actions
