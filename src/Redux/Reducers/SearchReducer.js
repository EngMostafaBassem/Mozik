import * as actionTypes from '../Actions/actionTypes'

const SearchReducer=(state={
        
    isSearching:false,
    searchResult:[],
    activeSearch:false


},action)=>{

    switch(action.type){

     case actionTypes.SEARCHING:
          return {...state,isSearching:true,searchResult:[],activeSearch:true}

     case actionTypes.SEARCHING_RESULT:
          return {...state,isSearching:false,searchResult:action.payload,activeSearch:true} 
          
      
     case actionTypes.ACTIVATING_SEARCH:
          return  {...state,isSearching:false,searchResult:[],activeSearch:false}
          
          
      default:
          return state    

    }

}

export default SearchReducer
