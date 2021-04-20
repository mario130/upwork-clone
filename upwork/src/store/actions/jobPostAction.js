import * as actionTypes from './action-types'
export const addJob = (payload) => (dispatch) => {
    dispatch({ type: actionTypes.addJob,
     payload:payload
   })
}
