import { GET_PROFILE } from '../actions/types'

const initialState: Array<any> = []

export function getProfile (state = initialState, { type, payload }) {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}
