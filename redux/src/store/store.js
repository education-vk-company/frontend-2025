import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import usersReducer from './users/reducer'

export default configureStore({
  reducer: combineReducers({
    users: usersReducer,
  })
})
