
import * as actionTypes from '../Actions/actionTypes'
const artistReducer=(state={
    artists:[],
    loading:true,
    err:null
},action)=>{
    
    switch(action.type)
    {

         case actionTypes.ARTISTS_LOADING:
         
            return {...state,loading:true,err:null}


         case actionTypes.ARTISTS_ERROR:
             return {...state,loading:false,err:action.payload}
             
             
          case actionTypes.ARTISTS_SHOW:
           console.log(action.payload)
              return {...state,loading:false,artists:action.payload}   
        default:


             return state
    }
       
}
export default artistReducer