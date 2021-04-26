import * as actionTypes from './action-types'
export const createProfile = (payload) => (dispatch) => {
    dispatch({ type: actionTypes.CREATE_PROFILE,
     payload:payload
   })
}
