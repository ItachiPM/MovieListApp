import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {StarRating} from "../starRating/StarRating";
import {setGenre, setVisibility} from "../../features/addMovie/addMovie-slice";
import {MovieEntity} from "types";

import './AddForm.css';


export const AddForm = () => {
    const dispatch = useDispatch()
    const {visible, genreArray} = useSelector((store: RootState) => store.addMovie)

    const [form, setForm] = useState<MovieEntity>({
        title: '',
        rate: 0,
        genre: 'Selected',
    })

    const onHandleStarRating = (e: number) => {
        setForm({
            ...form,
            rate: e,
        })
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:3001/movie', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            console.log(res)

            setForm({
                title: '',
                rate: 0,
                genre: 'Selected',
            })
            dispatch(setGenre(form.genre));

        } catch (err) {
            console.log(err)
        }

    }

    return <div className='AddForm' style={{visibility: visible}}>
        <button className='ExitButton' onClick={() => dispatch(setVisibility('hidden'))}>x</button>
        <form onSubmit={sendForm}>
            <label>
                Type <br/>
                <select value={form.genre} onChange={e => setForm({
                    ...form,
                    genre: e.target.value,
                })}>
                    <option value="select">Select</option>
                    {genreArray.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
            </label>
            <label>
                Title <br/>
                <input value={form.title} onChange={e => setForm({
                    ...form,
                    title: e.target.value,
                })} type="text"/>
            </label>
            <label>
                Rate
                <StarRating
                    name='movieRating'
                    rating={form.rate}
                    onHandleStarRating={onHandleStarRating}
                />
            </label>
            <button
                className='SubmitButton'
                type='submit'
                onClick={() => {
                    dispatch(setVisibility('hidden'));
                }}
            >Add</button>
        </form>
    </div>
}
