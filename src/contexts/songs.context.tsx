import { createContext } from 'react';
import Song from '../types/Song/song.type';
import Qoute from '../types/Qoute/Qoute.type';

interface ContextProps { 
    songs : Song[];
    setSongs : Function;
    selectedSong : Song ;
    updateSelectedSong : Function;
    selectedQoute : Qoute | undefined;
    setSelectedQoute : Function;
}

export const SongsContext = createContext({} as ContextProps);
