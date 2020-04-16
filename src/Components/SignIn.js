import React, { useState, useEffect } from "react"
import "../App.css"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { SignInAction } from "../Redux/Actions"
import Input from "./Utils/Input"
import FormInput from "./FormInput/FormInput"
import Modal from "react-responsive-modal"
const SignIn = (props) => {
  useEffect(() => console.log("This is SignIn props", props))
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setrememberMe] = useState(false)
  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handlePassword = (e) => {
    // console.log("handle password", e.target.value)
    setPassword(e.target.value)
  }
  const handleCheck = () => {
    setrememberMe(!rememberMe)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setPassword("")
    setUser("")
    setrememberMe(false)
    const data = { user: user, password: password }
    props.signIn(data)
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        // backgroundColor: "gold",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <FormInput
          name="email"
          type="email"
          value={user}
          handleChange={handleUser}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handlePassword}
          label="Password"
          required
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {props.loading ? (
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userToken: state.userToken,
    loading: state.loading,
    token: state.token,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(SignInAction(user)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
