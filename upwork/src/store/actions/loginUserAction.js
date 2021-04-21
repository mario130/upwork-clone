import * as actionTypes from "./action-types";
export const loginUser = (email, token) => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
      token
    }
  }
}
;
