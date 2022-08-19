import React, { useState, createContext, useEffect } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("red")

  const loadData = () => {
    const color = localStorage.getItem("color")
    if (color) {
      setColor(color)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const changeColor = (e, color) => {
    color = e.target.className
    setColor(color)
  }

  const data = {
    color,
    changeColor,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext
