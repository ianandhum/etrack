import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import tasksReducer from './tasks.reducer'
import clientReducer from './client.reducer'
import employeeReducer from './employee.reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  tasks:tasksReducer,
  client:clientReducer,
  employee:employeeReducer
})