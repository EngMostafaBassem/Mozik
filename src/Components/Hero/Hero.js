import React from 'react'
import './Hero.scss'
import {Link} from 'react-router-dom'
const Hero=()=>{
    return(
        <div className="hero_container">
           <div className="content">

               <div >
                  <p>Music App For Playing Songs , For Every One</p>
                   <Link className="link"  to="/Artists"> <i className="fa fa-arrow-right"></i> Kick Off</Link>     
               </div>

               <div>
                   <figure>
                       <img src={require('../../assets/ketty2.jpg')} />
                   </figure>
                   <figure>
                       <img src={require('../../assets/selena.jpg')}/>
                   </figure>
                   <figure>
                       <img src={require('../../assets/taylor.jpg')} />
                   </figure>
               </div>
           </div>
           <div className="image">
              <figure>
                  <img src={require('../../assets/background.jpeg')} />
              </figure>
               
               </div>
           <div className="footer">
               <p>FIND YOUE PERFECT MUSIC</p>
           </div>
           <div className="space">section4</div>
        
        </div>
    )
}
export default Hero