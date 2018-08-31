import { AUTHENTICATED, REGISTER, LOGIN, DASHBOARD } from '../actions/types'

const initialState = {
  authenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, authenticated: true, user: action.payload }
    case LOGIN:
      return { ...state, authenticated: true, user: action.payload }
    case AUTHENTICATED:
      return { ...state, authenticated: true }
    case DASHBOARD:
      return { ...state, user: action.payload }
    default:
      return state
  }
}