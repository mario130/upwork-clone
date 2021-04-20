import * as actionTypes from './../actions/action-types'
const initialState = {
    title:"",
    category:"",
    description:"",
    projectType:"",
    skills:[],
    experience:"",
    paymentChoice:"",
    budget:0,
    duration:""
}

export const jobPostReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.addJob :
            return {...state,...action.payload }
        
        default:
            return state
        }
}