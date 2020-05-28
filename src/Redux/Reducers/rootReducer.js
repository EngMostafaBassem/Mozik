
import {combineReducers} from 'redux'
import artistReducer from './artistReducer'
import authReducer from './authReducer'
import SearchReducer from './SearchReducer'
const rootReducer=combineReducers({
    authReducer,
    artistReducer, 
    SearchReducer


})
export default rootReducer