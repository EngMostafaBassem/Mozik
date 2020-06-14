import React,{useState, useEffect} from 'react'

import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Content from '../../Content/Content'
import NavBar from '../..//NavBar/NavBar'
import '../Drums/Drums.scss'
import Drums from '../Drums/Drums'
import DrumText from '../DrumTools/DrumText/DrumText'
import DrumSwitch from '../DrumTools/DrumSwitch/DrumSwitch'
import DrumVolume from '../DrumTools/DrumVolume/DrumVolume'
import '../../Drums/DrumContainer/DrumContainer.scss'
import {Row,Col} from 'reactstrap'
import DrumContext from '../../drums-context'
const DrumsContainer=()=>{
    const [actorInfo,setActorInfo]=useState({name:'',generes:'',popularity:'',followers:'',img:''})
    const [currentVolume,setCurrentVolume]=useState(1)

    const getVolumeRange=(val)=>{
        
       
        setCurrentVolume(val/100)

    }
    const [btnName,setBtnName]=useState('')
    const changeName=(name)=>{
        setBtnName(name)
    }


   
    return(
        <div  className="DrumsContainer">
         <Header  isDrums={true}/>
        
         <Content drums={true}>
             <DrumContext.Provider value={{btnName,changeName}}>

            
             <div className="drums-control-container">
                 <Row>
                     <Col xs={6}>
                     <DrumText/>
                     </Col>

                     <Col xs={6} className="d-flex justify-content-center ">
                     <DrumVolume getVolumeRange={getVolumeRange}/>
                     </Col>
                 </Row>
            
               
              

             </div>
            <Drums currentVolume={currentVolume} />
            </DrumContext.Provider>
         </Content>
         <SideBar actorInfo={actorInfo}/>
         <NavBar/>

        
           
        </div>
    )
}
export default DrumsContainer