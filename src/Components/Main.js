import React, { useEffect, useState,useContext } from 'react'
import  {BrowserRouter,Route,Switch,Link, Redirect} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import Hero from './Hero/Hero'
import Artists from './Artists/Artists'
import Albums from './Albums/Albums'

import {disactivatingSearch} from '../Redux/Actions/albumsActions'
import Tracks from './Tracks/Tracks'
import DrumContainer from './Drums/DrumContainer/DrumContainer'

const Auth=()=>{
    

useEffect(()=>{

    
    window.location.assign('https://accounts.spotify.com/en/authorize?client_id=75b27752a2824d73a49e934a0f8e69f4&response_type=token&redirect_uri=http://EngMostafaBassem.github.io/Mozik/Main')

    
    
    
},[])

    return (
        <></>
    )
}

const Main=()=>{
    const dispatch=useDispatch()

  
    return(
        <div>
       
      
           <BrowserRouter>
           <Switch>
           
          
          
            <Route path="/Artists" component={()=>{

          
            dispatch(disactivatingSearch())
                
                return <Artists/>
            }
                
                }/>
            
            <Route path="/Auth" component={Auth}/>
            <Route path="/:id/Albums" component={()=><Albums />}/>
            <Route exact path="/Albums" component={()=><Albums />}/>
            <Route exact path="/:id/:id2/Tracks"  component={()=><Tracks/>}/>
            <Route path="/Drums" component={DrumContainer}/>
            <Route path="/Tracks" component={Tracks}/>
            
            
           
            <Route exact path="/Main" component={Hero}/>    
            <Redirect  to= "/Auth" />       
           </Switch>
           </BrowserRouter>
       
        </div>
    )
}
export default Main