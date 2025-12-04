import { createSlice } from '@reduxjs/toolkit'

import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE
} from './actions'

const initialState = {
  contacts: [],
  loading: false,
  error: '',
}

function oldUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      break;
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts, ...action.payload],
      }
      break;
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      break;
    default:
      return state;
  }
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getContactsRequestStarted: state => {
      state.loading = true
    },
    getContactsRequestSuccessed: (state, action) => {
      state.loading = false
      state.contacts.push(...action.payload)
      state.error = ''
    },
    getContactsRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getContactsRequestStarted,
  getContactsRequestSuccessed,
  getContactsRequestFailed
} = usersSlice.actions

export default usersSlice.reducer
