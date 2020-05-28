import React from 'react'
import './NavBar.scss'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
          <div className="navbar">

          <div className="ft-container">
             <p>Features</p>
          </div>

          <ul className="nav-container">
            <li><i class="fa fa-wpexplorer fa-2x"></i><Link className="link">Explore</Link></li>
            <li><i class="fa fa-tv fa-2x"></i><Link className="link"> Categories</Link></li>
            <li> <i class="fa fa-microphone fa-2x"></i><Link className="link">Artists</Link></li>
            <li> <i class="fa fa-address-book fa-2x"></i><Link className="link">Albums</Link></li>
          </ul>
          </div>
    )
}
export default NavBar