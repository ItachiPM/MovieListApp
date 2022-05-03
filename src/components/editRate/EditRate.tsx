import React, {useState} from "react";
import {StarRating} from "../starRating/StarRating";

interface Props {
    rate: number;
}

export const EditRate = (props: Props) => {
    const {rate} = props;
    const [editRate, setEditRate] = useState(0);

    const onHandleEditRate = (e: number) => {
        setEditRate(e)
    }

    return <div>
        <form action="">
            <label>
                <StarRating name='editRate' rating={rate} onHandleStarRating={onHandleEditRate}/>
            </label>
            <button type='submit'>save</button>
        </form>

    </div>
}
