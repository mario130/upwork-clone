import * as actionTypes from "./../actions/action-types";
const initialState = {
  email: localStorage.getItem("user") || "",
  token: localStorage.getItem("token") || "",
  userType:localStorage.getItem("userType") || "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
        userType: action.payload.userType,
        token: action.payload.token,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        email: "",
        token: ""
      }

    default:
      return state;
  }
};
