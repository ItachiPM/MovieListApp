import React from "react";
import {MovieRate} from "../movieRate/MovieRate";

import './MovieList.css'

export const MovieList = () => {
    return <div className='MovieList'>
        <MovieRate index={1} rate={8} title='sialala'/>
        <MovieRate index={2} rate={6} title='sialala'/>
        <MovieRate index={3} rate={5} title='sialala'/>
        <MovieRate index={4} rate={3} title='sialala'/>
    </div>
}
