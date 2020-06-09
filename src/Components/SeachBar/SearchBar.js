
import React from 'react'
import './SearchBar.scss'
const SearchBar=({textChange,placeHolder})=>{
  
    return(
         <div className="searchBar">
            <input type="text" placeholder={placeHolder} onChange={(e)=>textChange(e.target.value)}/>
            <i class="fa fa-search search-icon" ></i>
         </div>
    )
}
export default SearchBar