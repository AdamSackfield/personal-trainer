import axios from 'axios'
import history from '../../hoc/history'
import { REGISTER, FLASH, AUTHENTICATED } from '../types';

const ROOT_URL = 'http://localhost:9898/user'

const onSuccess = (dispatch, type, payload, redirect = null) => {
  dispatch({ type, payload: payload.user })
  dispatch({ type: FLASH, payload: payload.message })
  if(redirect !== null) {
    history.push(redirect)
  }
}

const onError= (dispatch, type, payload, redirect = null) => {
  dispatch({ type, payload })
  if(redirect !== null) {
    history.push(redirect)
  }
}

export function signUp({ username, password }) {
  return async dispatch => {
    try {
      const response = await axios.post(`${ROOT_URL}/create`, { username, password })
        return onSuccess(dispatch, REGISTER, response.data, '/dashboard')
    } catch(error) {
        return onError(dispatch, FLASH, response.data.message)
    }
  }
}

export function login({ username, password }) {
  return async dispatch => {
    try {
      const response = await axios.post(`${ROOT_URL}/login`, { username, password})
        localStorage.setItem('token', response.data.token)
        return onSuccess(dispatch, AUTHENTICATED, response.data, '/dashboard')
    } catch(error) {
        return onError(dispatch, FLASH, 'Login Failed')
    }
  }
}