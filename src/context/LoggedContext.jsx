import React, { useState, createContext, useEffect } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [isLogged, setIsLogged] = useState("")

  useEffect(() => {
    localStorage.getItem("auth") !== "" ? setAuth(true) : setAuth(false)
    if (auth !== false) {
      setIsLogged("logged")
    } else {
      setIsLogged("")
    }
  }, [auth])

  const data = {
    isLogged,
    setIsLogged,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider }
export default AuthContext
