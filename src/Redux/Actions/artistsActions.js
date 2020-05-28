import * as actionTypes from './actionTypes'
import axios from 'axios'

/*********************Loading Artists*************************** */
export const ArtistsLoading=()=>({
    type:actionTypes.ARTISTS_LOADING
})

export const ArtistsError=(errmsg)=>({
    type:actionTypes.ARTISTS_ERROR,
    payload:errmsg
})


export const FetchArtists=(token)=>dispatch=>{

    dispatch(ArtistsLoading())

    console.log('token in action is'+token)
    axios.get('https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=50',{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(ArtistsShow(data.data.artists.items))).catch(err=> dispatch( ArtistsError(err)))

}


export const ArtistsShow=(Artists)=>({
    type:actionTypes.ARTISTS_SHOW,
    payload:Artists
})


/************************************************************************************** */




/*******Searching for Artists*************** */

export const searchingArtist=()=>({
    type:actionTypes.SEARCHING
})

export const activatingSearch=()=>({
    type:actionTypes.ACTIVATING_SEARCH
})

export const searchArtistResult=(artist)=>({
    type:actionTypes.SEARCHING_RESULT,
    payload:artist
})


export const searchArtist=(token,query)=>dispatch=>{
    console.log("token search"+token)
    dispatch(searchingArtist)
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=artist&market=US`,{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(searchArtistResult(data.data.artists.items)))

}

/************************************************************************** */

