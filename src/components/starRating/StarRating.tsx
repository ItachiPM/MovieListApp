import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

import './StarRating.css'

interface Props {
    name: string;
    rating: number;
    onHandleStarRating: (e: number) => void;
    onlyRead?: boolean;
}

export const StarRating = (props: Props) => {
    const {name, onHandleStarRating, rating, onlyRead} = props

    const [hover, setHover] = useState<null | number>(null)

    return <div className='starRating'>
            {[... Array(10)].map((star, index) => {
                const ratingValue = index + 1;

                if(onlyRead) {
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
                } else {
                    return <label style={{display: "inline"}} key={index}>
                        <input type="radio"
                               name={name}
                               value={ratingValue}
                        />
                        <FaStar size={40}
                                className='star'
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#babdbd'}
                        />
                    </label>
                }


            })}
        </div>
}
