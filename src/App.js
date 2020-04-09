import React, { useEffect } from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
const App = (props) => {
  useEffect(() => console.log("props of Apps are", props), [])
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}
const mapStateToProps = (state) => {
  return {
    headers: state.userToken,
  }
}
export default connect(mapStateToProps)(App)
