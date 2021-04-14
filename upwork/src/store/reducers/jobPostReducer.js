import * as actionTypes from './../actions/action-types'
const initialState = {
    jobTitle:"",
    category:"Graphic Design"
}
export const jobPostReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.addJob :
            // return {...state, jobTitle:action.payload.jobTitle,category:action.payload.category }
            return {...state,...action.payload }
        default:
            return state
        }
}