import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

import './StarRating.css'

interface Props {
    name: string;
    rating: number;
    onHandleStarRating: (e: number) => void;
}

export const StarRating = (props: Props) => {
    const {name, onHandleStarRating, rating} = props

    const [hover, setHover] = useState<null | number>(null)

    return <div className='starRating'>
            {[... Array(10)].map((star, index) => {
                const ratingValue = index + 1;
                    return <label style={{display: "inline"}} key={index}>
                        <input type="radio"
                               name={name}
                               value={ratingValue}
                               onClick={() => onHandleStarRating(ratingValue)}
                        />
                        <FaStar size={40}
                                className='star'
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#babdbd'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                        />
                    </label>
            })}
        </div>
}
