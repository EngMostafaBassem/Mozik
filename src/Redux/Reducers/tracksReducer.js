import * as actionTypes from '../Actions/actionTypes'
const trackReducer=(state={
    Tracks:[],
    loading:true,
    err:null
},action)=>{
    
    switch(action.type)
    {

         case actionTypes.TRACKS_LOADING:
         
            return {...state,loading:true,err:null}


         case actionTypes.TRACKS_ERROR:
             return {...state,loading:false,err:action.payload}
             
             
         case actionTypes.TRACKS_SHOW:

        
            let filterdTracks=[...action.payload]
            filterdTracks=filterdTracks.filter(item=>item.preview_url!=null)
             
           
              return {...state,loading:false,Tracks:filterdTracks}   


           
        default:


             return state
    }
       
}
export default trackReducer