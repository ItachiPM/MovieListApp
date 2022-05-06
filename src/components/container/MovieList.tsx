import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState, store} from "../../features/store";
import {MovieRate} from "../movieRate/MovieRate";
import {Spinner} from "../common/Spinner/Spinner";
import {MovieEntity} from 'types'

import './MovieList.css'


export const MovieList = () => {
    const [movies, setMovies] = useState<MovieEntity[] | null>(null)
    const {genre} = useSelector((store: RootState) => store.addMovie)

    useEffect(() => {
        fetchApi();
    }, [genre])


    const fetchApi = async () => {
        setMovies(null)
        const res = await fetch('http://localhost:3001/movie/list', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                genre: genre
            })
        })
        const data = await res.json()
        setMovies(data)
    }

    if(movies === null ) {
        return <Spinner/>
    }

    return <div className='MovieList'>
        {movies.map(movie => <MovieRate
            key={movie.id}
            index={movies.indexOf(movie) + 1}
            rate={movie.rate}
            title={movie.title}/>)}
    </div>

}
