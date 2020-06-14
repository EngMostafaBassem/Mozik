
import React from 'react'
import {Form,FormGroup,Label,CustomInput} from 'reactstrap'
const DrumVolume =({getVolumeRange})=>{



    return (
        <div>

      <FormGroup>
       
        <CustomInput type="range" id="exampleCustomRange" name="customRange" onChange={(e)=>getVolumeRange(e.target.value)}  />
      </FormGroup>
        </div>
    )
}
export default DrumVolume