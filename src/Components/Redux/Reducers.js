import { SIGN_IN, SIGN_IN_REQUEST } from "./Constants"
const initState = {
  userToken: {},
}
export const Reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      console.log("sign in request ")
      return {
        userToken: action.payload,
      }
  }
}
