import React, { useState } from "react"
import "../App.css"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { SignInAction } from "./Redux/Actions"
const SignIn = (props) => {
  console.log("SignIn props are", props)
  const [input, setinput] = useState("")
  const [password, setPassword] = useState("")
  const handleInput = (e) => {
    setinput(e.target.value)
  }
  const handlePassword = (e) => {
    console.log("handle password", e.target.value)
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <p>Email</p>{" "}
        <input
          style={{ width: 200, height: 20 }}
          onChange={handleInput}
          value={input}
        />
      </div>

      <div>
        <p>password</p>{" "}
        <input
          style={{ width: 200, height: 20 }}
          onChange={handlePassword}
          value={password}
        />
      </div>

      <button onClick={props.signIn}>fetch</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    state: state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(SignInAction()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
