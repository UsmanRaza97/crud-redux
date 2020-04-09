import React, { useState, useEffect } from "react"
import "../App.css"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { SignInAction } from "../Redux/Actions"
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
    // console.log("this is handle check", e.target.value)
    setrememberMe(!rememberMe)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // const { user, rememberMe } = this.state;
    // localStorage.setItem("rememberMe", rememberMe)
    // localStorage.setItem("email", rememberMe ? user : "")
    // localStorage.setItem("password", rememberMe ? password : "")
    setPassword("")
    setUser("")
    setrememberMe(false)
    const data = { user: user, password: password }
    props.signIn(data)
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          User: <input name="user" value={user} onChange={handleUser} />
        </label>
        <label>
          password:{" "}
          <input name="password" value={password} onChange={handlePassword} />
        </label>
        <label>
          <input
            name="rememberMe"
            checked={rememberMe}
            onChange={handleCheck}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        {props.loading ? (
          <button type="submit">Sign In</button>
        ) : (
          <p>loading</p>
        )}
      </form>
      {/* <div>
        <button onClick={props.signIn}>fetch</button>
      </div> */}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userToken: state.userToken,
    loading: state.loading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(SignInAction(user)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
