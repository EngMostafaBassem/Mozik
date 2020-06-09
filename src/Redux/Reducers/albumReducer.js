import * as actionTypes from '../Actions/actionTypes'
const albumReducer=(state={
    Albums:[],
    loading:true,
    err:null
},action)=>{
    
    switch(action.type)
    {

         case actionTypes.ALBUMS_LOADING:
         
            return {...state,loading:true,err:null}


         case actionTypes.ALBUMS_ERROR:
             return {...state,loading:false,err:action.payload}
             
             
          case actionTypes.ALBUMS_SHOW:
            
                return {...state,loading:false,Albums:action.payload}   


           
        default:

             return state
    }
       
}
export default albumReducer