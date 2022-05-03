import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {StarRating} from "../starRating/StarRating";

import './AddForm.css';

export const AddForm = () => {
    const {visible} = useSelector((store: RootState) => store.addMovie)

    const [rate, setRate] = useState<number>(0)

    const onHandleStarRating = (e: number) => {
        setRate(e)
    }

    return <div className='AddForm' style={{visibility: visible}}>
        <form>
            <label>
                Title <br/>
                <input type="text"/>
            </label>
            <label>
                Rate
                <StarRating
                    name='movieRating'
                    rating={rate}
                    onHandleStarRating={onHandleStarRating}
                    onlyRead
                />
            </label>
            <button type='submit'>Add</button>
        </form>
    </div>
}
