import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
} from "./Constants"
const initState = {
  loading: true,
  userToken: {},
  contacts: [],
}
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: !state.loading,
      }
    case SIGN_IN_SUCCESS:
      console.log("sign in success", action.payload)
      return {
        ...state,
        userToken: action.payload,
        loading: !state.loading,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        userToken: action.payload,
        loading: !state.loading,
      }
    case GET_CONTACT_REQUEST:
      return {
        ...state,
      }
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      }
    case GET_CONTACT_FAILURE:
      return {
        ...state,
        contacts: action.payload,
      }
    default:
      return state
  }
}
