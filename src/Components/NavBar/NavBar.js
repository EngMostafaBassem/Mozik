import React from 'react'
import './NavBar.scss'
import {Link} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {FetchAlbumsAll} from '../../Redux/Actions/albumsActions'
const NavBar=()=>{
  const dispatch=useDispatch()
    return(
          <div className="navbar">

          <div className="ft-container">
             <p>Features</p>
          </div>

          <ul className="nav-container">
            <li><i class="fa fa-wpexplorer fa-2x"></i><Link className="link">Explore</Link></li>
            <li><i class="fa fa-music fa-2x"></i><Link className="link">Tracks</Link></li>
            <li> <i class="fa fa-microphone fa-2x"></i><Link className="link"  to="/Artists">Artists</Link></li>
            <li> <i class="fa fa-image fa-2x"></i><Link className="link"  onClick={()=>dispatch(FetchAlbumsAll())}  to="/Albums">Albums</Link></li>
          </ul>
          </div>
    )
}
export default NavBar