import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./Constants"
const initState = {
  loading: true,
  userToken: {},
}
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        loading: !state.loading,
      }
    case SIGN_IN_SUCCESS:
      console.log("sign in success", action.payload)
      return {
        userToken: action.payload,
        loading: !state.loading,
      }
    case SIGN_IN_FAILURE:
      return {
        userToken: action.payload,
        loading: !state.loading,
      }
    default:
      return state
  }
}
