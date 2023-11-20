
import React, { useContext } from "react";
import './../styles/App.css';
import { authContext } from "../context/AuthContextProvider";

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(authContext)
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {isAuthenticated ?
        <p className="authText" >You are now authenticated, you can proceed</p>
        :
        <p>you are not authenticated</p>
      }
      <input id="verify" type="checkbox" onChange={()=>setIsAuthenticated(!isAuthenticated)} />
      <label htmlFor="verify">I'm not a robot</label>
    </div>
  )
}

export default App
