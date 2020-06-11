import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import Main from './Components/Main'
import {useDispatch} from 'react-redux'
import authActions from './Redux/Actions/authActions'
import TrackContext from '../src/Components/context-track'
function App() {


  const [playingID,setPlayingID]=useState(null)
  const [trackPreview,setTrackPreview]=useState(null)

    
    const changePlayingID=(id)=>{

        
        setPlayingID(id)
    }


const dispatch=useDispatch()
  function parseURLHash () {
    var search = window.location.hash.substring(1);
    var urlHash = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
    return urlHash;
}
var urlHash = parseURLHash();
var accessToken = urlHash.access_token;
  useEffect(()=>{
    
    dispatch(authActions(accessToken))

},[])
   
   
  return (
    <div> 
       <TrackContext.Provider value={{playingID,changePlayingID}}>
      <Main/>       
      </TrackContext.Provider>
    </div>
  );
}

export default App;
