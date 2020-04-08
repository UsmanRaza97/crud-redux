import {
  SIGN_IN,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "./Constants"
import axios from "axios"
export const SignInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  }
}
export const SignInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS,
  }
}
export const SignInFailure = () => {
  return {
    type: SIGN_IN_FAILURE,
  }
}
export const SignInAction = () => {
  return (dispatch) => {
    dispatch(SignInRequest())
    axios
      .post("https://staging-api.20miles.us/api/auth/sign_in", {
        email: "muhammad.imran@fileboard.com",
        password: "password",
      })
      .then((res) => {
        console.log("response", res.data)
      })
      .catch((err) => {
        console.log("error response ", err)
      })
  }
}
