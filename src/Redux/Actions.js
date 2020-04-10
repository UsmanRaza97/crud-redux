import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
} from "./Constants"
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

export const getContactRequest = () => {
  return {
    type: GET_CONTACT_REQUEST,
  }
}
export const getContactSuccess = (contacts) => {
  return {
    type: GET_CONTACT_SUCCESS,
    payload: contacts,
  }
}
export const getContactFailure = (error) => {
  return {
    type: GET_CONTACT_FAILURE,
    payload: error,
  }
}

export const GetContacts = () => {
  return (dispatch) => {
    dispatch(getContactRequest())
    const headers = JSON.parse(localStorage.getItem("headers"))
    axios
      .get(
        " https://staging-api.20miles.us/api/contacts.json?page=1&per_page=10",
        { headers: headers }
      )
      .then((res) => {
        console.log(res.data.contacts)
        const contacts = res.data.contacts
        dispatch(getContactSuccess(contacts))
      })
      .catch((err) => {
        console.log(err)
        const error = err
        dispatch(getContactFailure(error))
      })
  }
}

export const SignInAction = (data) => {
  return (dispatch) => {
    dispatch(SignInRequest())
    axios
      .post("https://staging-api.20miles.us/api/auth/sign_in", {
        email: data.user,
        password: data.password,
      })
      .then((res) => {
        const data = res
        const headers = res.headers
        localStorage.setItem("headers", JSON.stringify(headers))
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
