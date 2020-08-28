import React from 'react';
import YouTube from 'react-youtube';
import QoutesList from './QoutesList';


const YouTubePlayer = (props : any) => {
    const songName = 'hello';
    const opts : any = {
        height: '440',
        width: '850',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    } ;

    function onReady(event : any ) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }
   

    return (
        <>
            <h3>{songName}</h3>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
            <QoutesList></QoutesList>
        </>
    )
}


export default YouTubePlayer;