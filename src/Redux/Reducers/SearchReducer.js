import * as actionTypes from '../Actions/actionTypes'

const SearchReducer=(state={
        
    isSearching:false,
    searchResult:[],
    savedArtists:[]
    


},action)=>{

    switch(action.type){

     case actionTypes.SEARCHING:
          return {...state,isSearching:true,searchResult:[],activeSearch:false}

     case actionTypes.SEARCHING_RESULT:
          console.log(action.payload)
          return {...state,isSearching:false,searchResult:action.payload,activeSearch:true} 
          
      
     case actionTypes.DISACTIVATING_SEARCH:
          return  {...state,isSearching:false,searchResult:[],activeSearch:false}


     case actionTypes.SEARCHING_RESULT_ARTIST:
       
        return  {...state,isSearching:false,searchResult:action.payload,savedArtists:action.payload,activeSearch:true}


          
          
      default:
          return state    

    }

}

export default SearchReducer
