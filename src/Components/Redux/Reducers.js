import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./Constants"
const initState = {
  userToken: null,
}
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      console.log("sign in request ", state)
      return {
        userToken: action.payload,
      }
    case SIGN_IN_SUCCESS:
      return {
        userToken: action.payload,
      }
    case SIGN_IN_FAILURE:
      return {
        userToken: action.payload,
      }
    default:
      return state
  }
}
