import React, {FormEvent, useState} from "react";
import {StarRatingReadOnly} from "../starRating/StarRatingReadOnly";

import './MovieRate.css'
import {ListGenre} from "../ListGenre/ListGenre";
import {StarRating} from "../starRating/StarRating";
    import {MovieEditReqEntity} from "types";
import {useDispatch} from "react-redux";
import {setGenre} from "../../features/addMovie/addMovie-slice";

interface Props {
    id: string;
    index: number;
    title: string;
    rate: number;
    genre: string;
}

export const MovieRate = (props: Props) => {
    const dispatch = useDispatch()
    const {index, title, rate, id, genre} = props
    const [editForm, setEditForm] = useState<MovieEditReqEntity>({
        id,
        rate,
        genre,
    })
    const [edit, setEdit] = useState<boolean>(false);
    const [height, setHeight] = useState<string>('15%')

    const setEditGenre = (e: string) => {
        setEditForm({
            ...editForm,
            genre: e,
        })
    }

    const setEditRate = (e: number) => {
        setEditForm({
            ...editForm,
            rate: e,
        })
    }

    const setVisibleEdit = () => {
        setEdit(!edit);
        setHeight(height === '15%' ? '43%' : '15%')
    }

    const sendFrom = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:3001/movie', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(editForm),
            });

            dispatch(setGenre(await res.json()));
        } finally {

        }
    }


    return <div
        className='MovieRate'
        style={{height: height}}
    >
        <div className='Number'>{index}</div>
        <div className='TitleAndRating'>
            <div className='MovieRateTitle'>{title}</div>
            <div className='Rating'><StarRatingReadOnly rating={rate}/></div>
        </div>
        <div className='Edit'>
            <button
                className='EditButton'
                onClick={setVisibleEdit}>Edit
            </button>
        </div>
        {edit ? <div className="EditBox">
                <form onSubmit={sendFrom}>
                    <label>
                        <ListGenre value={editForm.genre} onChangeFunction={setEditGenre}/>
                    </label>
                    <label>
                        <StarRating
                            name='editRate'
                            rating={editForm.rate}
                            onHandleStarRating={setEditRate}
                        />
                    </label>
                    <button type='submit'>save</button>
                </form>
            </div>
            :
            null
        }
    </div>
}
