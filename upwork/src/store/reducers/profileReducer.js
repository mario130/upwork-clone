import * as actionTypes from './../actions/action-types'
const initialState = {
    category:"",
    subcategory:"",
    title:"",
    overview:"",
    skills:[],
    expertiseLevel:"",
    education:{
        school:"",
        areaOfStudy:""
    },
    hourlyRate:0,
    profilePhoto:"",
    location: {
        country: "",
        street:"",
        city: "",
        postalCode: "",
      },
      feedbacks:[]
}


export const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.CREATE_PROFILE :
            return {...state,...action.payload }
        
        default:
            return state
        }
}