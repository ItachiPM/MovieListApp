import React from "react";
import {useDispatch} from "react-redux";
import {setVisibility} from "../../features/addMovie/addMovie-slice";

import './AddButton.css'

export const AddButton = () => {
    const dispatch = useDispatch();
    const handleVisibility = () => {
        dispatch(setVisibility('visible'))
    }

    return <button className='AddButton' onClick={() => handleVisibility()}>Add Film</button>
}
