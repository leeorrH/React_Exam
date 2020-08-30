import React, { useContext, useState } from 'react';
import YouTube from 'react-youtube';
import { SongsContext } from '../contexts/songs.context';
import { QoutesWrapper } from '../App.style';


const YouTubePlayer = (props) => {
    const { selectedSong, selectedQoute } = useContext(SongsContext);
    const [playerEvent, setPlayerEvent] = useState(undefined);
    const opts = {
        height: '440',
        width: '850',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    function onReady(event) {
        // access to player in all event handlers via event.target
        setPlayerEvent(event.target);
        event.target.playVideo();
    }

    function handleQouteSelected(event) {
        let offset = selectedSong?.quotes.find((qoute) => qoute.text == (event.target.innerText)).offset;
        if (offset == undefined) {
            console.error('offset returned undefined')
        }
        else {
            playerEvent.seekTo(offset);
        }
    }

    return (
        <>
            {
                selectedSong ?
                    (
                        <>
                            <h3>{selectedSong.title}</h3>
                            <YouTube videoId={selectedSong.youtubeId} opts={opts} onReady={onReady} />

                            <QoutesWrapper>
                                <span>Qutes</span>
                                <span style={{ float: 'right' }}> {selectedSong.quotes?.length} qoutes </span>
                                {selectedSong.quotes?.map((qoute, index) => (
                                    <p key={index} className="qoute" onClick={handleQouteSelected} >
                                        <span>{qoute.text}</span>
                                        <span style={{ float: 'right' }}>{qoute.offset}</span>
                                    </p>
                                ))}
                            </QoutesWrapper>
                        </>
                    )
                    :
                    <div> loading </div>
            }

        </>
    )
}


export default YouTubePlayer;