import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {StarRating} from "../starRating/StarRating";
import {setGenre, setVisibility} from "../../features/addMovie/addMovie-slice";
import {MovieEntity} from "types";

import './AddForm.css';

interface ErrorAdd {
    genre: string;
    title: string;
    rate: string;
}

export const AddForm = () => {
    const dispatch = useDispatch()
    const {visible, genreArray} = useSelector((store: RootState) => store.addMovie)

    const [errorMessage, setErrorMessage] = useState('')
    const [errorForm, setErrorForm] = useState<ErrorAdd>({
        genre: '',
        title: '',
        rate: '',
    })
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

        setErrorForm({
            genre: '',
            title: '',
            rate: '',
        })

        try {
            const res = await fetch('http://localhost:3001/movie', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setForm({
                    title: '',
                    rate: 0,
                    genre: 'Selected',
                })
                dispatch(setGenre(form.genre));
            }

            if (!res.ok) {
                dispatch(setVisibility('visible'))
                const {message} = await res.json()
                if (message === 'unknown genre, different with genres in database') {
                    setErrorMessage('Select Type of movie.')
                    setErrorForm(errorForm => ({
                        ...errorForm,
                        genre: '1px solid red',
                    }))
                }
                if (message === 'title of movie is incorrect written. title should have length between 1-50 signs.') {
                    setErrorMessage('Missing movie title.')
                    setErrorForm(errorForm => ({
                        ...errorForm,
                        title: '1px solid red',
                    }))
                }
                if (message === 'This movie is already on your list.') {
                    setErrorMessage(message)
                    setErrorForm(errorForm => ({
                        ...errorForm,
                        title: '1px solid red',
                    }))
                }
                if (message === 'rate should be a number between 1-10.') {
                    setErrorMessage('Missing movie rate.')
                    setErrorForm(errorForm => ({
                        ...errorForm,
                        rate: '1px solid red',
                    }))
                }
            }

        } finally {
        }
    }

    return <div className='AddForm' style={{visibility: visible}}>
        <button className='ExitButton' onClick={() => dispatch(setVisibility('hidden'))}>x</button>
        <form onSubmit={sendForm}>
            <label>
                Type <br/>
                <select style={{border: errorForm.genre}} value={form.genre} onChange={e => setForm({
                    ...form,
                    genre: e.target.value,
                })}>
                    <option value="select">Select</option>
                    {genreArray.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
                {errorForm.genre !== '' && <small>{errorMessage}</small>}
            </label>
            <label>
                Title <br/>
                <input style={{border: errorForm.title}} value={form.title} onChange={e => setForm({
                    ...form,
                    title: e.target.value,
                })} type="text"/>
                {errorForm.title !== '' && <small>{errorMessage}</small>}
            </label>
            <label>
                Rate
                <StarRating
                    name='movieRating'
                    rating={form.rate}
                    onHandleStarRating={onHandleStarRating}
                />
                {errorForm.rate !== '' && <small>{errorMessage}</small>}
            </label>
            <button
                className='SubmitButton'
                type='submit'
                onClick={() => {
                    dispatch(setVisibility('hidden'));
                }}
            >Add
            </button>
        </form>
    </div>
}
