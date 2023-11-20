import { createContext, useState } from "react";
import React from "react"


export const authContext = createContext()

const AuthContextProvider = (props)=>{
    const [isAuthenticated , setIsAuthenticated] = useState(false)
    return <authContext.Provider value={{isAuthenticated, setIsAuthenticated}} >
        {props.children}
    </authContext.Provider>
}


export default AuthContextProvider