import { combineReducers } from 'redux'
import history from './history'
import clearhistory from './clearhistory'


export default combineReducers({
  history,
  clearhistory
})