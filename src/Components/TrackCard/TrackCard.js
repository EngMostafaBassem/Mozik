
import React,{useState,useEffect,useContext} from 'react'

import  './TrackCard.scss'
import {useHistory} from 'react-router-dom'

import TrackContext from '../context-track'
const TrackCard=({img,name,artistName,time,trackPreview,trackID})=>{

  
const [play,setPlayTrack]=useState(false)
const [pause,setPauseTrack]=useState(true)
const [audio,setAudio]=useState(new Audio(trackPreview))
const history=useHistory()



 const trackCon=useContext(TrackContext)

    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        return  mins + ':' + secs;
      }
     

         

   const playTrack=()=>{
    
   
    trackCon.changePlayingID(trackID)
    
      
    
   }

   const pauseTrack=()=>{
    
    trackCon.changePlayingID(null)
    
}

const truncateString=(str)=>{
    let sepeatorIndex=str.split('').indexOf('-')
    return  sepeatorIndex==-1?str:str.split('').slice(0,sepeatorIndex).join('')

}

useEffect(()=>{

    console.log('repeated')
})


useEffect(()=>{

    return ()=>{
        setPauseTrack(true)
        setPlayTrack(false)
        audio.pause()
        trackCon.changePlayingID(null)
    }
},[history])




useEffect(()=>{


 if(trackID==trackCon.playingID)
 {
     
    setPauseTrack(false)
    setPlayTrack(true)      
   
   
    audio.play();
 }


 

     if(trackID!=trackCon.playingID)
    {
        
        setPauseTrack(true)
        setPlayTrack(false)
        audio.pause()



    }


    

},[trackCon])




    return(
        <div className="TrackCard">
           
              <figure className="TrackCard__img">
                      <img src={img} className={play?'rotateImg':''}/>
              </figure>

              <div className="TrackCard__name">
                   <p>{ truncateString(name)}</p>
              </div>

              <div className="TrackCard__artistName">
                       <p>{artistName}</p>
              </div>

              <div className="TrackCard__time">
                       <p>{ msToTime(time)}</p>
              </div>
             
             <div className="TrackCard__trackStatus" >
                   <i class="fa fa-play" style={{display:play?'none':'block'}}  onClick={()=>playTrack()}> </i>
                   <i class="fa fa-pause" style={{display:play?'block':'none'}}  onClick={()=>pauseTrack()}></i>
             </div>

        </div>
    )
}
export default  React.memo(TrackCard)