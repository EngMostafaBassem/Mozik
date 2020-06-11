import React, { useEffect,useState ,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import NavBar from '../NavBar/NavBar'
import '../Tracks/Tracks.scss'
import {Container,Col,Row} from 'reactstrap'
import Loading from '../Loading'
import Box from '../Box/Box'
import {FetchTracks,searchTrack,disactivatingSearch} from '../../Redux/Actions/tracksActions'

import TrackCard from '../TrackCard/TrackCard'
import TrackContext from '../context-track'

const Tracks=(props)=>{

    const params=useParams()
    const dispatch=useDispatch()
    const token=useSelector(state=>state.authReducer.token)
    const artistsData=useSelector(state=>state.artistReducer)
    const artistSearch=useSelector(state=>state.SearchReducer)
    const TracksData=useSelector(state=>state.trackReducer)
    const trackSearch=useSelector(state=>state.SearchReducer)
    const [actorInfo,setActorInfo]=useState({name:'',generes:'',popularity:'',followers:'',img:''})
    const [playingID,setPlayingID]=useState(null)
    const changePlayingID=(id)=>{

        
      setPlayingID(id)
  }

   useEffect(()=>{
          dispatch(disactivatingSearch())
          dispatch(FetchTracks(token,params.id))
         
   },[])

   
    useEffect(()=>{

    
       
        let artist=artistsData.artists.find(item=>item.id===params.id2)
        if(artist==null)
          artist=artistSearch.savedArtists.find(item=>item.id===params.id2)
         
         
        if(artist!=null)
          
        setActorInfo({
            name:artist.name,
            generes:artist.genres[0],
            popularity:artist.popularity,
            followers:artist.followers.total,
            img:artist.images[0].url})
            

    },[artistsData,TracksData])

  

    const textChange=(query)=>{
      
        if(query==""){
            dispatch(disactivatingSearch())
        }
        else{dispatch(searchTrack(token,query))}
    }
    
  

    return(
        <div className="TracksContainer">
           
           <NavBar/>
            <Header  placeHolder="Searhing for Tracks" textChange={textChange} />
            <Content>
                <Container>
                <Row >
                <TrackContext.Provider value={{playingID,changePlayingID}}>
                    {
                 
                 (TracksData.loading||trackSearch.isSearching)?<Loading/>:
                 (trackSearch.activeSearch)?

                 trackSearch.searchResult.map(item=>
                    <Col xs={{size:12}} className="d-flex justify-content-center"   key={item.id}>
                      
                  <TrackCard 
                  artistName={item.artists[0].name} 
                  name={item.name}
                  trackPreview={item.preview_url}
                  time={item.duration_ms}
                  img={actorInfo.img}
                  trackID={item.id}
                   />
                  </Col>
                  
                  ):

                  TracksData.Tracks.map(item=>
                    <Col xs={{size:12}} className="d-flex justify-content-center"   key={item.id}>
                      
                  <TrackCard 
                  artistName={item.artists[0].name} 
                  name={item.name}
                  trackPreview={item.preview_url}
                  time={item.duration_ms}
                  img={actorInfo.img}
                  trackID={item.id}
                   />
                  </Col>
                  )



                }
                    </TrackContext.Provider>
              
                </Row>
               
                </Container>
            </Content>
            

            <SideBar actorInfo={actorInfo}/>
        </div>
    )
}
export default Tracks