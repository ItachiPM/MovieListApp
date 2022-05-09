import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {EditMovie} from "../movieRate/EditMovie";
import {Spinner} from "../common/Spinner/Spinner";
import {MovieEntity} from 'types'

import './MovieList.css'


export const MovieList = () => {
    const {genre} = useSelector((store: RootState) => store.addMovie)
    const [movies, setMovies] = useState<MovieEntity[] | null>(null)

    useEffect(() => {
        fetchApi();
    }, [genre, movies])


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

    if(movies === null ) {
        return <Spinner/>
    }

    return <div className='MovieList'>
        {movies.map(movie => <EditMovie
            key={movie.id}
            id={movie.id as string}
            index={movies.indexOf(movie) + 1}
            rate={movie.rate}
            title={movie.title}
            genre={movie.genre}
        />)}
    </div>

}
