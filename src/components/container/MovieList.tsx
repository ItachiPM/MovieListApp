import React, {useEffect, useState} from "react";
import {MovieRate} from "../movieRate/MovieRate";
import {MovieEntity} from 'types'

import './MovieList.css'
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {Spinner} from "../common/Spinner/Spinner";

export const MovieList = () => {
    const [movies, setMovies] = useState<MovieEntity[]>([])
    const {genre} = useSelector((store: RootState) => store.addMovie)

    useEffect(() => {
        fetchApi();
    }, [genre])

    const fetchApi = async () => {
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

    console.log(movies)



    return <div className='MovieList'>
        {movies.map(movie => <MovieRate key={movie.id} index={movies.indexOf(movie) + 1} rate={movie.rate} title={movie.title}/>)}
    </div>
}
