import * as actionTypes from './actionTypes'
import axios from 'axios'

/*********************Loading Albums*************************** */
export const AlbumsLoading=()=>({
    type:actionTypes.ALBUMS_LOADING
})

export const AlbumsError=(errmsg)=>({
    type:actionTypes.ALBUMS_ERROR,
    payload:errmsg
})


export const FetchAlbums=(token,actorId)=>dispatch=>{

    dispatch(AlbumsLoading())
    axios.get(`https://api.spotify.com/v1/artists/${actorId}/albums?offset=0&include_groups=album,single,compilation,appears_on&market=ES`,{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(AlbumsShow(data.data.items))).catch(err=> dispatch( AlbumsError(err)))


}








export const FetchAlbumsAll=(token)=>dispatch=>{
    
        dispatch(AlbumsLoading())
    
       
        axios.get(`https://api.spotify.com/v1/search?q=a&type=album&market=US`,{
    
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
        .then(data=>dispatch(AlbumsShow(data.data.albums.items))).catch(err=> dispatch( AlbumsError(err)))
    
    }
    


export const AlbumsShow=(Albums)=>({
    type:actionTypes.ALBUMS_SHOW,
    payload:Albums
})


/************************************************************************************** */






export const searchingALbums=()=>({
    type:actionTypes.SEARCHING
})

export const disactivatingSearch=()=>({
    type:actionTypes.DISACTIVATING_SEARCH
})

export const searchALbumResult=(album)=>({
    type:actionTypes.SEARCHING_RESULT,
    payload:album
})


export const searchAlbum=(token,query)=>dispatch=>{
    dispatch(searchingALbums())
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album&market=US`,{

        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    .then(data=>dispatch(searchALbumResult(data.data.albums.items)))
     

}


