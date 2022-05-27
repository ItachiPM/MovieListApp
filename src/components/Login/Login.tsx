import React, {FormEvent, useState} from "react";
import {LoginEntity} from 'types'

import './Login.css'

export const Login = () => {
    const [login, setLogin] = useState<LoginEntity>({
        login: '',
        password: '',
    })

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(login),
        });


    }

    return <div className='Login'>
        <h1>Your Movie List</h1>
        <form className='LoginFrom' onSubmit={sendForm}>
            <label>
                <p>Login</p>
                <input type="text" value={login.login} onChange={e => setLogin({
                    ...login,
                    login: e.target.value
                })}/><br/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" value={login.password} onChange={e => setLogin({
                    ...login,
                    password: e.target.value
                })}/>
            </label>
            <button type='submit'>Login</button>
        </form>
    </div>
}
