import * as actionTypes from "./action-types";
export const loginUser = (email, token,userType,userName,firstName) => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
      token,
      userType,
      userName,
      firstName,
    }
  }
}
;
