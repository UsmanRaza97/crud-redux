import React from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import { Switch, Route } from "react-router-dom"
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}

export default App
