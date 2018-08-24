import axios from 'axios'
import history from '../../hoc/history'

const ROOT_URL = 'http://localhost:9898/user/create'

const onSuccess = (type = null, payload = null, success) => {
  console.log('Success', success)
}

const onError= (type = null, payload = null, success) => {
  console.log('Success', success)
}

export function signUp({ username, password }) {
  console.log('DATA', password)
  return async dispatch => {
    try {
      const success = await axios.post(`${ROOT_URL}`, { username, password })
        return onSuccess(1, 2, success)
    } catch(error) {
        return onError(1, 2, error)
    }
  }
}