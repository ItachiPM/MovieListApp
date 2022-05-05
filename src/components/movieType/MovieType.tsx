import React, {useEffect} from "react";

import './MovieType.css'
import {useDispatch, useSelector} from "react-redux";
import {setGenre, setGenreArray} from "../../features/addMovie/addMovie-slice";
import {RootState} from "../../features/store";

export const MovieType = () => {
    const dispatch = useDispatch();
    const {genreArray} = useSelector((store: RootState) => store.addMovie)

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const res = await fetch('http://localhost:3001/genre')
        dispatch(setGenreArray(await res.json()));
    }

    const onHandleGenre = (e: string) => {
        dispatch(setGenre(e))
    }

    return <div className='MovieType'>
        {genreArray.map(genre => <button key={genre} onClick={() => onHandleGenre(genre)} className='MovieTypeButton'>{genre}</button>)}
    </div>
}
