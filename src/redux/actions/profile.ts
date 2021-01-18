import { GET_PROFILE } from './types'

export function getProfile (profile: object) {
  return {
    type: GET_PROFILE,
    payload: profile
  }
}
