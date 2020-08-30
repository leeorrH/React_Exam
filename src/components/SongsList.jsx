import React, { useContext, useState } from 'react';
import Song from '../types/Song/song.type';
import { SongsContext } from '../contexts/songs.context';
import Autocomplete from 'react-autocomplete';


const SongsList = () => {
    const { songs, updateSelectedSong, selectedSong } = useContext(SongsContext);
    const [value, setValue] = useState('');
    const inputStyle = {
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        padding: '2px 0',
        fontSize: '15px',
        position: 'fixed',
        overflow: 'auto',
        width: '250px', 
        maxHeight: '50%', // TODO: don't cheat, let it flow to the botto
      };
    return (
        <>
            <Autocomplete
                getItemValue={(song) => song.title}
                items={songs}
                renderItem={(song, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} className="songTitle">
                        {song.title}
                    </div>
                }

                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSelect={(value, song) => {
                    updateSelectedSong(song);
                    setValue(value);
                }}
                shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
                inputProps = {{style: inputStyle,
                    placeholder: 'please enter a song name '}}
            />
        </>
    )
}


export default SongsList;