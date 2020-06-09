import React from 'react'
import './Header.scss'
import SearchBar from '../SeachBar/SearchBar'
const Header =({textChange,placeHolder})=>{

    
    return(
        <div className="header"> 
          <SearchBar textChange={textChange} placeHolder={placeHolder}/>
          <i class="fa fa-music fa-3x" style={{color:'#222C56',textShadow:'2px 2px 2px  #222C56'}}></i>
        </div>
    )
}
export default Header