import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import Main from './Components/Main'
import {useDispatch} from 'react-redux'
import authActions from './Redux/Actions/authActions'

function App() {


  


    
   

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
   
useEffect(()=>{
  
    setTimeout(() => {
      
        window.location.assign('https://accounts.spotify.com/en/authorize?client_id=75b27752a2824d73a49e934a0f8e69f4&response_type=token&redirect_uri=http://localhost:3000/Main/')

    }, 3600*60);
  }
)
   
  return (
    <div> 
       
      <Main/>       
     
    </div>
  );
}

export default App;
