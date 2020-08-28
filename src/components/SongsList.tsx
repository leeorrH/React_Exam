import React from 'react';
import Song from '../types/Song/song.type';


const SongsList = (props: any) => {
    const songs : Song[] = props.songs;

    return (
        <>
            {/* 
            style
            autocomplete
            */}

            <div>
                {songs?.map((song:Song) => (
                    <p key={song.id}>
                        {song.title}
                    </p>
                ))}
            </div>
        </>
    )
}  


export default SongsList;