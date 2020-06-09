import React,{useEffect} from 'react';
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
   
   
  return (
    <div> 
      <Main/>       
    </div>
  );
}

export default App;
