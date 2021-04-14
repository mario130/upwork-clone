import * as actionTypes from './../actions/action-types'
const initialState = {
    jobTitle:"",
    category:""
}
export const jobPostReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.addJobTitle :
            return {...state, jobTitle:action.payload.jobTitle,category:action.payload.category }
            
    
        default:
            return state
        }
}