import React from 'react'
import './SideBar.scss'
const SideBar=({actorInfo})=>{
  
    return(
      
        <div className="sideBarContainer">
            {
                actorInfo.img==""?<></>:
            <div>
              <div className="actor_info">

                   <div className="actor_info__img">
                       <figure>
                           <img src={actorInfo.img}/>
                       </figure>
                   </div>

            

                   <div className="actor_info__name">
                         <p>{actorInfo.name}</p>
                   </div>

                   <div className="actor_info__subtitle">
                          <p>{actorInfo.generes}</p>
                   </div>
              </div>

              <div className="number_group">

             
              <div className="actor_followers">
                 <p>Followers &nbsp; <span>{actorInfo.followers}</span></p>
              </div>

              <div className="actor_popularity">
               <p>Popularity &nbsp; <span>{actorInfo.popularity}</span></p>
              </div>

              </div>
              </div>
}
        </div>
    )
}
export default SideBar