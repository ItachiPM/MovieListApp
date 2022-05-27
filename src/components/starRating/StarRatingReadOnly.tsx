import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

import './StarRating.css'

interface Props {
    rating: number;
}

export const StarRatingReadOnly = (props: Props) => {
    const {rating} = props

    return <div className='starRating'>
            {[... Array(10)].map((star, index) => {
                const ratingValue = index + 1;


                    return <label style={{display: "inline"}} key={index}>
                        <input type="radio"
                               value={ratingValue}
                        />
                        <FaStar size={40}
                                className='star'
                                color={ratingValue <= rating ? '#ffc107' : '#babdbd'}
                        />
                    </label>
            })}
        </div>
}
