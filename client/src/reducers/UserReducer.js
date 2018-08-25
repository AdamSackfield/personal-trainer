import { AUTHENTICATED, REGISTER } from '../actions/types'

const initialState = {
  authenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, authenticated: true, user: action.payload }
    case AUTHENTICATED:
      return { ...state, authenticated: true }
    default:
      return state
  }
}