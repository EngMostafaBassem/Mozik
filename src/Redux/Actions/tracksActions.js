import * as actionTypes from './actionTypes'
import axios from 'axios'

/*********************Loading Tracks*************************** */
export const TracksLoading=()=>({
    type:actionTypes.TRACKS_LOADING
})

export const TracksError=(errmsg)=>({
    type:actionTypes.TRACKS_ERROR,
    payload:errmsg
})


export const FetchTracks=(token,albumId)=>dispatch=>{

    dispatch(TracksLoading())

  
    axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`,{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(TracksShow(data.data.items))).catch(err=>dispatch(TracksError(err)))

      
}








export const FetchTracksAll=(token)=>dispatch=>{
    
        dispatch(TracksLoading())
    
       
        axios.get(`https://api.spotify.com/v1/search?q=a&type=album&market=US`,{
    
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
        .then(data=>dispatch(TracksShow(data.data.Tracks.items))).catch(err=> dispatch( TracksError(err)))
    
    }
    


export const TracksShow=(Tracks)=>({
    type:actionTypes.TRACKS_SHOW,
    payload:Tracks
})


/************************************************************************************** */






export const searchingTracks=()=>({
    type:actionTypes.SEARCHING
})

export const disactivatingSearch=()=>({
    type:actionTypes.DISACTIVATING_SEARCH
})

export const searchTrackResult=(track)=>({
    type:actionTypes.SEARCHING_RESULT,
    payload:track
})


export const searchTrack=(token,query)=>dispatch=>{
    dispatch(searchingTracks())
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&market=US`,{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(searchTrackResult(data.data.tracks.items)))
     

}


