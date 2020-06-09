
import {combineReducers} from 'redux'
import artistReducer from './artistReducer'
import authReducer from './authReducer'
import SearchReducer from './SearchReducer'
import albumReducer from './albumReducer'
import trackReducer from './tracksReducer'
const rootReducer=combineReducers({
    authReducer,
    artistReducer, 
    SearchReducer,
    albumReducer,
    trackReducer
    


})
export default rootReducer