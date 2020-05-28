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
import {FetchArtists,searchArtist,activatingSearch} from '../../Redux/Actions/artistsActions'
import Loading from '../Loading'
const Artist=()=>{


  const dispatch=useDispatch()
  const token=useSelector(state=>state.authReducer.token)
  const artistsData=useSelector(state=>state.artistReducer)
  const artistSearch=useSelector(state=>state.SearchReducer)
  
const [actorInfo,setActorInfo]=useState({name:'',generes:'',popularity:'',followers:'',img:''})

  useEffect(()=>{
      console.log("here in artists "+token)
        dispatch(FetchArtists(token))

  },[token])


  useEffect(()=>{
           console.log("artists is "+artistsData.artists)
  },[artistsData])
    

  const updateInfo=(item)=>{
      console.log(item)
      
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
      console.log(token+"ss")
      if(query==""){
          dispatch(activatingSearch())
      }
      else{ dispatch(searchArtist(token,query))}
  }

    return(

      
        <div className="artistContainer">
            <NavBar/>
            <Header textChange={textChange}/>
            <Content>
                <Container className="mt-5" >
                    <Row>

                     {

                         (artistsData.loading||artistSearch.loading)?<Loading/>:
                         (artistSearch.activeSearch)?

                          artistSearch.searchResult.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2" onMouseOver={()=>updateInfo(item)} key={item.id} >
                            <Box img={(item.images.length==0)?'../images/anonymous-person-221117.jpg':item.images[0].url} name={item.name} genres={item.genres[0]} />
                          
                         </Col>
                         )):

                          artistsData.artists.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2" onMouseOver={()=>updateInfo(item)} key={item.id} >
                            <Box img={(item.images.length==0)?'../images/anonymous-person-221117.jpg':item.images[1].url} name={item.name} genres={item.genres[0]} />
                          
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