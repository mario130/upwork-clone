import * as actionTypes from './action-types'
export const addJobTitle = (payload) => (dispatch) => {
    dispatch({ type: actionTypes.addJobTitle,
     payload
   })
}