import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import tasksReducer from './tasks.reducer'
export default (history) => combineReducers({
  router: connectRouter(history),
  tasks:tasksReducer
})