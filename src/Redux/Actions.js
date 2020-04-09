import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./Constants"
import axios from "axios"
export const SignInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  }
}
export const SignInSuccess = (data) => {
  console.log("Sign in action is", data)
  return {
    type: SIGN_IN_SUCCESS,
    payload: data,
  }
}
export const SignInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  }
}
export const SignInAction = (data) => {
  // const email = localStorage.getItem("email")
  // const passwor = localStorage.getItem("password")
  console.log("data is ", data)
  return (dispatch) => {
    dispatch(SignInRequest())
    axios
      .post("https://staging-api.20miles.us/api/auth/sign_in", {
        email: data.user,
        password: data.password,
      })
      .then((res) => {
        const data = res
        dispatch(SignInSuccess(data))
        console.log("response header", res.headers)
      })
      .catch((err) => {
        const error = err
        dispatch(SignInFailure(error))
        console.log("error response ", err)
      })
  }
}
//"muhammad.imran@fileboard.com"
//"password"
