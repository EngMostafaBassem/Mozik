import React, { useEffect } from 'react'
import  {BrowserRouter,Route,Switch,Link, Redirect} from 'react-router-dom'
import Hero from './Hero/Hero'
import Artists from './Artists/Artists'

const Auth=()=>{
useEffect(()=>{

    
    window.location.assign('https://accounts.spotify.com/en/authorize?client_id=75b27752a2824d73a49e934a0f8e69f4&response_type=token&redirect_uri=http://localhost:3000/Main/callback')
    
},[])

    return (
        <></>
    )
}

const Main=()=>{
    return(
        <div>
           <BrowserRouter>
           <Switch>
            <Route path="/Main" component={Hero}/>
            <Route path="/Artists" component={Artists}/>
            <Route  exact path="/" component={Auth}/>
            <Redirect exact to= "/" />
           </Switch>
           </BrowserRouter>
        </div>
    )
}
export default Main