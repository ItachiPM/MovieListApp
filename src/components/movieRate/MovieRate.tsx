import React, {useState} from "react";
import {StarRatingReadOnly} from "../starRating/StarRatingReadOnly";

import './MovieRate.css'

interface Props {
    index: number;
    title: string;
    rate: number
}

export const MovieRate = (props: Props) => {
    const {index, title, rate} = props

    return <div className='MovieRate'>
        <div className='Number'>{index}</div>
        <div className='TitleAndRating'>
            <div className='Title'>{title}</div>
            <div className='Rating'><StarRatingReadOnly rating={rate}/></div>
        </div>
        <div className='Edit'>
            <button className='EditButton'>Edit</button>
        </div>
        </div>
}
