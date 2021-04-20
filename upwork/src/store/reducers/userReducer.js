import * as actionTypes from "./../actions/action-types";
const initialState = {
  username: "",
  id: "",
  token: null,
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

    default:
      return state;
  }
};
