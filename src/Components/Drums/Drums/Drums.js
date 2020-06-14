import React, { useState, useEffect } from 'react'
import DrumButton from '../DrumButtons/DrumButton'
import {Dbtns} from '../drumbtnkeys'
import '../Drums/Drums.scss'

const Drums=({currentVolume})=>{
  const[drumBtns,setDrumsBtns]=useState([])
  const [activeBtn,setActiveBtn]=useState(null)

  
const forceUpdate=()=>{
    
    setActiveBtn(null)
}

  useEffect(()=>{

   
  },[activeBtn])

  useEffect(()=>{
    console.log('test'+currentVolume)
    setDrumsBtns(Dbtns)
    const handlePress=(e)=>{
       // console.log(e.key)
        setActiveBtn(e.key)
    }

    

    window.addEventListener('keydown',handlePress)


    
    return ()=>{
        window.removeEventListener('keydown',handlePress)
    }
  },[])


 
    return (

      
        <div className="drums-btns">
         
          
            {
               
                drumBtns.map((item,index)=> 
                <DrumButton keyBtn={item.keybtn} 
                 key={index}
                 activeBtn={activeBtn} 
                 sound={item.sound1}
                 forceUpdate={forceUpdate}
                 volume={currentVolume}
                 btnName={item.name}
                 />)
            }
          
        </div>
    )
}

export default Drums