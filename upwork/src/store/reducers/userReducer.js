import * as actionTypes from "./../actions/action-types";
const initialState = {
  email: localStorage.getItem("user") || "",
  token: localStorage.getItem("token") || "",
  userType:localStorage.getItem("userType") || "",
  userName:localStorage.getItem("userName") || "",
  firstName:localStorage.getItem("firstName") || "",


  
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
        userType: action.payload.userType,
        token: action.payload.token,
        userName:action.payload.userName,
        firstName:action.payload.firstName,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        email: "",
        token: "",
        userName:"",
        firstName:""
      }

    default:
      return state;
  }
};
