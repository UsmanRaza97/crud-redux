import React, { useEffect, useState, useRef } from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Home from "./Components/Home"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { Auth } from "./Redux/Actions"
const App = ({ data, token }) => {
  const [accessToken, setaccessToken] = useState()
  // setaccessToken()
  // const checkLogoutFunc = () => {
  //   console.log("check")
  //   setaccessToken(JSON.parse(localStorage.getItem("headers")))
  // }
  useEffect(() => {
    console.log("props of app")
    const accessToken = JSON.parse(localStorage.getItem("headers"))
    setaccessToken(accessToken)
  }, [token])
  // const Auth = {
  //   isAuthenticated: false,
  //   authenticate(cb) {
  //     fakeAuth.isAuthenticated = true
  //     setTimeout(cb, 100) // fake async
  //   },
  //   signout(cb) {
  //     fakeAuth.isAuthenticated = false
  //     setTimeout(cb, 100)
  //   },
  // }

  console.log("App access token is ", accessToken, token)
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => {
          console.log("clicked", accessToken)
          return accessToken ? <Redirect to="/home" {...props} /> : <SignIn />
          console.log("clicked 2")
        }}
      />
      {/* <Route exact path="/signin" component={SignIn} /> */}
      <Route path="/signup" component={SignUp} />
      <Route
        exact
        path="/home"
        render={(props) => {
          console.log("clicked", accessToken)
          return !accessToken ? <Redirect to="/" {...props} /> : <Home />
          console.log("clicked 2")
        }}
      />
    </Switch>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.userToken,
    token: state.token,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    auth: () => dispatch(Auth()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
