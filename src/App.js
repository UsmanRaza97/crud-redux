import React, { useEffect } from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Home from "./Components/Home"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
const App = ({ data }) => {
  const accessToken = JSON.parse(localStorage.getItem("headers"))
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (accessToken ? <Redirect to="/home" /> : <SignIn />)}
      />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/home" component={Home} />
    </Switch>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.userToken,
  }
}
export default connect(mapStateToProps)(App)
