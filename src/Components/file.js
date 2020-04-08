import React, { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [input, setinput] = useState("")
  const [password, setPassword] = useState("")
  const handleInput = (e) => {
    setinput(e.target.value)
  }
  const handlePassword = (e) => {
    console.log("handle password", e.target.value)
    setPassword(e.target.value)
  }
  const fetchdata = () => {
    axios
      .post("https://staging-api.20miles.us/api/auth/sign_in", {
        email: input,
        password: password,
      })
      .then((res) => {
        localStorage.setItem()
        console.log("response", res.data)
      })
      .catch((err) => {
        console.log("error response ", err)
      })
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

      <button onClick={fetchdata}>fetch</button>
    </div>
  )
}

export default App
