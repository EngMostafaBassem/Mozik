
import React from 'react'
import {Form,FormGroup,Label,CustomInput} from 'reactstrap'
import '../DrumSwitch/DrumSwitch.scss'
const DrumSwitch=()=>{

    return (
        <div className="drum_switch">
          
        <FormGroup>
       
       
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Bank" color="danger" color="red" />
          
        
      </FormGroup>
        </div>
    )
}
export default DrumSwitch