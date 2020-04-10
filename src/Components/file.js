import React, { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  

export default App
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