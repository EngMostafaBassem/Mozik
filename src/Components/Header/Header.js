import React from 'react'
import './Header.scss'
import SearchBar from '../SeachBar/SearchBar'
const Header =({textChange})=>{

    
    return(
        <div className="header"> 
          <SearchBar textChange={textChange}/>
          <i class="fa fa-music fa-3x" style={{color:'#222C56',textShadow:'2px 2px 2px  #222C56'}}></i>
        </div>
    )
}
export default Header