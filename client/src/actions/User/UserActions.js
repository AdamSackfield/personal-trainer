import axios from 'axios'
import history from '../../hoc/history'
import { REGISTER, ERROR } from '../types';

const ROOT_URL = 'http://localhost:9898/user/create'

const onSuccess = (dispatch, type = null, payload = null) => {
  dispatch({ type, payload })
  dispatch({ type: ERROR, payload: 'Account created.' })
	history.push('/')
}

const onError= (dispatch, type = null, payload = null) => {
  dispatch({ type, payload })
  history.push('/signup')
}

export function signUp({ username, password }) {
  return async dispatch => {
    try {
      const response = await axios.post(`${ROOT_URL}`, { username, password })
        return onSuccess(dispatch, REGISTER, response.data.user)
    } catch(error) {
        return onError(dispatch, ERROR, response.data.message)
    }
  }
}