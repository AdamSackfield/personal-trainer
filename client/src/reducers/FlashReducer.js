import { ERROR } from '../actions/types'

const initialState = {
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return { ...state, message: action.payload }
    default:
      return state
  }
}