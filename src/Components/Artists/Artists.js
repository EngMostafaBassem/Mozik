import React, { useEffect,useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Artists.scss'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import Box from '../Box/Box'
import {Container,Col,Row} from 'reactstrap'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {FetchArtists,searchArtist,disactivatingSearch} from '../../Redux/Actions/artistsActions'
import Loading from '../Loading'

const Artist=()=>{

  const dispatch=useDispatch()
  const token=useSelector(state=>state.authReducer.token)
  const artistsData=useSelector(state=>state.artistReducer)
  const artistSearch=useSelector(state=>state.SearchReducer)
  
const [actorInfo,setActorInfo]=useState({name:'',generes:'',popularity:'',followers:'',img:''})

  useEffect(()=>{
      
        dispatch(disactivatingSearch())   
        dispatch(FetchArtists(token))

  },[])




  const updateInfo=(item)=>{     
    setActorInfo(
        {
        name:item.name,
        generes:item.genres[0],
        popularity:item.popularity,
        followers:item.followers.total,
        img: (item.images.length==0)?'../images/anonymous-person-221117.jpg':item.images[1].url
    })
    
  }
  const textChange=(query)=>{
      
      if(query==""){
          dispatch(disactivatingSearch())
      }
      else{ dispatch(searchArtist(token,query))}
  }

    return(

      
        <div className="artistContainer">
            <NavBar/>
            <Header textChange={textChange} placeHolder="Searhing for Artists"/>
            <Content>
                <Container className="mt-5" >
                    <Row>

                     {

                         (artistsData.loading||artistSearch.loading)?<Loading/>:
                         (artistSearch.activeSearch)?

                          artistSearch.searchResult.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2" onMouseOver={()=>updateInfo(item)} key={item.id} >
                            <Box img={(item.images.length==0)?'../images/anonymous-person-221117.jpg':item.images[0].url} 
                            
                             name={item.name}
                             subtitle={item.genres[0]}
                             actorId={item.id}
                             
                             />
                          
                         </Col>
                         )):

                          artistsData.artists.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2" onMouseOver={()=>updateInfo(item)} key={item.id} >
                            <Box img={(item.images.length==0)?'../images/anonymous-person-221117.jpg':item.images[1].url} 
                            name={item.name}
                            subtitle={item.genres[0]}
                            actorId={item.id}

                              />
                          
                         </Col>
                         ))


                     }

                     
                   


                    </Row>
                </Container>
            

             </Content>   
            <SideBar actorInfo={actorInfo}/>
           
        </div>
    )
}
export default Artist