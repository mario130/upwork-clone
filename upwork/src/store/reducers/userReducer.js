import * as actionTypes from "./../actions/action-types";
const initialState = {
  email: localStorage.getItem("user") || "",
  token: localStorage.getItem("token") || "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
        // id: action.payload.id,
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
