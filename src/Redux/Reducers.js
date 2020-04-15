import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  AUTH_ACTION,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "./Constants"
const initState = {
  loading: true,
  userToken: {},
  contacts: [],
  token: false,
  searched: [],
  searchedErr: "",
}
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: !state.loading,
      }
    case SIGN_IN_SUCCESS:
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
    case AUTH_ACTION:
      return {
        ...state,
        token: !state.token,
      }
    case SEARCH_REQUEST:
      return {
        ...state,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searched: action.payload,
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        searchedErr: action.payload,
      }
    default:
      return state
  }
}
