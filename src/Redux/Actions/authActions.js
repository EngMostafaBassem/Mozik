import * as actionTypes from './actionTypes'

const fetchToken=(token)=>({
    type:actionTypes.FETCH_TOKEN,
    payload:token
})

export default fetchToken