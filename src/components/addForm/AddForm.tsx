import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {StarRating} from "../starRating/StarRating";

import './AddForm.css';
import {setVisibility} from "../../features/addMovie/addMovie-slice";

export const AddForm = () => {
    const dispatch = useDispatch()
    const {visible} = useSelector((store: RootState) => store.addMovie)
    const [selected, setSelected] = useState('Select')
    const [rate, setRate] = useState<number>(0)

    const onHandleStarRating = (e: number) => {
        setRate(e)
    }


    return <div className='AddForm' style={{visibility: visible}}>
        <button className='ExitButton' onClick={() => dispatch(setVisibility('hidden'))} >x</button>
        <form>
            <label>
                Type <br/>
                <select value={selected} onChange={e => setSelected(e.target.value)}>
                    <option value="select">select</option>
                    <option value="drama">Drama</option>
                    <option value="comedy">comedy</option>
                    <option value="action">action</option>
                </select>
            </label>
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
            <button className='SubmitButton' type='submit'>Add</button>
        </form>
    </div>
}
