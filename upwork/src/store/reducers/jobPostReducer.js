import * as actionTypes from './../actions/action-types'
const initialState = {
    title:"",
    category:"",
    description:"",
    projectType:"",
    skills:[],
    experience:"",
    paymentChioce:"",
    budget:0
}

export const jobPostReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.addJob :
            return {...state,...action.payload }
        default:
            return state
        }
}