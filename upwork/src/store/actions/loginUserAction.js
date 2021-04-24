import * as actionTypes from "./action-types";
export const loginUser = (email, token,userType) => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
      token,
      userType
    }
  }
}
;
