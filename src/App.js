import React, { useEffect, useState, useRef, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppWrapper,
SongListWrapper,
Title,
YouTubePlayerWrapper} from './App.style';
import YouTubePlayer from "./components/YouTubePlayer";
import SongsList from './components/SongsList';
import { SongsContext } from './contexts/songs.context';


async function fetchData(url, setFunction){
  let data;
  try { 
    const result = await fetch(url);
    data = await result.json();
    console.log(data);
    setFunction(data);
  }catch(e){
    console.error(e)
  }
  return data;
}


function App() {
  const {setSongs} = useContext(SongsContext);
  const [isLoading, setIsLoading] = useState(true);
  const suportedEndPoint = 'songs';
  const apiEndPoint = ` https://glacial-escarpment-40412.herokuapp.com/${suportedEndPoint}`;
  
   useEffect(()=>{
    fetchData(apiEndPoint, setSongs); 
    setIsLoading(false);
  }, [apiEndPoint]);
  
  
  return (
   <AppWrapper>
     <Title>
       <h1>Youtube qoutes application </h1>
     </Title>
     { isLoading? <div>is loading ...</div> : 
     <SongListWrapper>
        <SongsList/>
     </SongListWrapper>
    }
     <YouTubePlayerWrapper>
       <YouTubePlayer  />
     </YouTubePlayerWrapper>
   </AppWrapper>
  );
}

export default App;
