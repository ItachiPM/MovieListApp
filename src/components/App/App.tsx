import React from "react";
import {Menu} from "../menu/Menu";
import {MovieList} from "../container/MovieList";
import {AddButton} from "../addButton/AddButton";

import './App.css'
import {AddForm} from "../addForm/AddForm";
import {Provider} from "react-redux";
import {store} from "../../features/store";

export const App = () => {
    return <Provider store={store}>
    <div className='App'>
        <div className='Menu'>
            <Menu/>
        </div>
        <div className='Content'>
            <AddButton/>
            <MovieList/>
        </div>
        <AddForm/>
    </div>
    </Provider>
}
