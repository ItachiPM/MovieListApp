import React from "react";
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
        <div>{index}</div>
        <div>{title}</div>
        <div><StarRatingReadOnly rating={rate}/></div>
    </div>
}
