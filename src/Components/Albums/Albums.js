import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import NavBar from '../NavBar/NavBar'
import '../Albums/Albums.scss'
import {Container,Col,Row} from 'reactstrap'
import Loading from '../Loading'
import Box from '../Box/Box'
import {FetchAlbums,searchAlbum,disactivatingSearch,FetchAlbumsAll} from '../../Redux/Actions/albumsActions'

const Albums=(props)=>{

    const params=useParams()
    const dispatch=useDispatch()
    const token=useSelector(state=>state.authReducer.token)
    const artistsData=useSelector(state=>state.artistReducer)
    const artistSearch=useSelector(state=>state.SearchReducer)
    const albumsData=useSelector(state=>state.albumReducer)
    const albumsSearch=useSelector(state=>state.SearchReducer)
    const [actorInfo,setActorInfo]=useState({name:'',generes:'',popularity:'',followers:'',img:''})


   useEffect(()=>{
          dispatch(disactivatingSearch())
          if(params.id) dispatch(FetchAlbums(token,params.id))
          else dispatch(FetchAlbumsAll(token))

           
         
   },[])

   

    useEffect(()=>{

       
        let artist=artistsData.artists.find(item=>item.id===params.id)
        if(artist==null)
          artist=artistSearch.savedArtists.find(item=>item.id===params.id)
        
        
        if(artist!=null)
        setActorInfo({
            name:artist.name,
            generes:artist.genres[0],
            popularity:artist.popularity,
            followers:artist.followers.total,
            img:artist.images[0].url})

    },[albumsData])

  
    const textChange=(query)=>{
      
        if(query==""){
            dispatch(disactivatingSearch())
        }
        else{dispatch(searchAlbum(token,query))}
    }
  

    return(
        <div className="AlbumsContainer">
           
           <NavBar/>
            <Header  textChange={textChange} placeHolder="Searhing for Albums" />
            <Content>
       <Container className='mt-5'>
               <Row>

                     {

                         (albumsData.loading||albumsSearch.isSearching)?<Loading/>:
                         (albumsSearch.activeSearch)?

                          albumsSearch.searchResult.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2"  key={item.id} >
                            <Box img={(item.images.length==0)?'../../images/anonymous-person-221117.jpg':item.images[0].url} 
                            name={item.name}
                            subtitle={item.release_date}
                            albumId={item.id}
                            actorId={params.id}

                              />
                          
                         </Col>
                         )):              

                          albumsData.Albums.map(item=>(
                           
                            <Col xs={{size:3}} className="mb-2"  key={item.id} >
                            <Box img={(item.images.length==0)?'../../images/anonymous-person-221117.jpg':item.images[0].url} 
                            name={item.name}
                            subtitle={item.release_date}
                            albumId={item.id}
                            actorId={params.id}


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
export default Albums