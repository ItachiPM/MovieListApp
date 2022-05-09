import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";

interface Props {
    value: string;
    onChangeFunction: (e: string) => void;
}

export const ListGenre = (props: Props) => {
    const {value, onChangeFunction} = props
    const {genreArray} = useSelector((store: RootState) => store.addMovie)

    return <>Type <br/>
        <select value={value} onChange={e => onChangeFunction(e.target.value)}>
            <option value="select">Select</option>
            {genreArray.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select></>
}
