import * as actionTypes from './../actions/action-types'
const initialState = {
    
}
export const jobPostReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.addJob :
            return {...state,...action.payload }
        default:
            return state
        }
}