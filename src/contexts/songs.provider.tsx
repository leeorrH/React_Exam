
import React, { useState, useReducer } from 'react';
import  {SongsContext} from './songs.context';
import Song from '../types/Song/song.type';






export const SongsProvider = (props : any) => {

    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState({} as Song);
    const [selectedQoute,setSelectedQoute] = useState(undefined)
    const {children} = props;


    const updateSelectedSong = (song : any) => {
        setSelectedSong(song); 
        setSelectedQoute(undefined);
    }

   
    

    return (
        <SongsContext.Provider
            value={{
                songs,
                setSongs,
                selectedSong,
                updateSelectedSong,
                selectedQoute,
                setSelectedQoute
            }}>
            {children}
        </SongsContext.Provider>
    );
};