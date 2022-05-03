import React from "react";
import {useDispatch} from "react-redux";

import './AddButton.css'
import {setVisibility} from "../../features/addMovie/addMovie-slice";

export const AddButton = () => {
    const dispatch = useDispatch();
    const handleVisibility = () => {
        dispatch(setVisibility('visible'))
    }

    return <button className='AddButton' onClick={() => handleVisibility()}>Add Film</button>
}
