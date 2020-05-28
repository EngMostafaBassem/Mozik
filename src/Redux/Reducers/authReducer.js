import * as actionTypes from '../Actions/actionTypes'
const authReducer=(state={token:null},action)=>{

    switch(action.type)
    {
        case actionTypes.FETCH_TOKEN:
          
            return {...state,token:action.payload}


        default:
            return state    
    }

}

export default authReducer