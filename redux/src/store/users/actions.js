import axios from 'axios'

import { getContactsRequestStarted,
getContactsRequestSuccessed,
getContactsRequestFailed } from './reducer'

export const GET_CONTACTS_REQUEST = '@@users/GET_CONTACTS_REQUEST'
export const GET_CONTACTS_SUCCESS = '@@users/GET_CONTACTS_SUCCESS'
export const GET_CONTACTS_FAILURE = '@@users/GET_CONTACTS_FAILURE'

// const getContactsRequestStarted = () => ({
//   type: GET_CONTACTS_REQUEST
// })

// const getContactsRequestSuccessed = (contacts = []) => ({
//   type: GET_CONTACTS_SUCCESS,
//   payload: contacts,
// })

// const getContactsRequestFailed = (error = '') => ({
//   type: GET_CONTACTS_FAILURE,
//   payload: error,
// })

export const getContacts = () => {
  return (dispatch, getState) => {
    console.log('Request started', getState)
    dispatch(getContactsRequestStarted())

    axios
      .get('https://tt-front.vercel.app/prepods')
      .then(res =>{
        dispatch(getContactsRequestSuccessed(res.data))
      })
      .catch(res => {
        dispatch(getContactsRequestFailed(JSON.stringify(res.message)))
      })
  }
}
