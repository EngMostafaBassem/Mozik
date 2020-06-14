import React from 'react'
import './Content.scss'
const Content=(props)=>{
    return(
        <div className= {props.drums?" contentContainer drums":"contentContainer"}>
                {props.children}
        </div>
    )
}
export default Content