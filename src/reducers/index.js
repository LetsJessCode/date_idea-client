import ideaReducer from './ideaReducer'
import commentReducer from './commentReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    ideaReducer,
    commentReducer
})