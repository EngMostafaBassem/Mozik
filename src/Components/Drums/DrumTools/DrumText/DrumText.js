
import React,{useContext} from 'react'
import '../DrumText/DrumText.scss'
import DrumContext from '../../../drums-context'
const DrumText=()=>{

    const drumData=useContext(DrumContext)
    return (
        <div className="drum-text">

              <p>{drumData.btnName}</p>
        </div>
    )
}
export default DrumText