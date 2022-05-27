import React, {useState} from "react";
import {Login} from "../Login/Login";
import {App} from "../App/App";
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    const [login, setLogin] = useState(false);

    return <>
        <Routes>
            {login
                ? <Route element={<App/>} path='/platform'/>
                : <Route element={<Login/>} path='/'/>
            }
        </Routes>
    </>
}
