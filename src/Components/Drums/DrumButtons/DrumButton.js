import React, { useEffect,useState,useContext } from 'react'
import DrumContext from '../../drums-context'
import '../DrumButtons/DrumButton.scss'

const DrumButton=({keyBtn,activeBtn,sound,forceUpdate,volume,btnName})=>{
  const [active,setActive]=useState(false)
    const drumContext=useContext(DrumContext)
useEffect(()=>{
 
 if(keyBtn==activeBtn)
 {
     setActive(true)
    if(sound!='')
    {

        drumContext.changeName(btnName)
    
    const audio=new Audio(sound)
    audio.volume=volume
    audio.play()
    forceUpdate()
    }
 }



})



useEffect(()=>{
    return ()=>{
        setTimeout(() => {
            setActive(false)
        }, 500);
      
    }
},[active])

    return (
    <div className= {active?"DrumButton activeBtn":"DrumButton"} >
      <p>{keyBtn}</p>
    </div>
    )
}
export default DrumButton