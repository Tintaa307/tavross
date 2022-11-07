import React, { useState, createContext, useEffect } from "react"

const AccesibilityContext = createContext()

const AccesibilityProvider = ({ children }) => {
  const [opaque, setOpaque] = useState("")
  const [animation, setAnimation] = useState("")
  const [letterSpacing, setLetterSpacing] = useState("")

  const handleSpacing = () => {
    setLetterSpacing(letterSpacing === "" ? "letter-spacing" : "")
  }

  const handleAnimation = () => {
    setAnimation(animation === "" ? "animation" : "")
  }

  const toggleOpaque = () => {
    setOpaque(opaque === "" ? "opaque" : "")
  }

  const loadData = () => {
    const opaque = localStorage.getItem("opaque")
    if (opaque) {
      setOpaque(opaque)
    }

    const animation = localStorage.getItem("animation")
    if (animation) {
      setAnimation(animation)
    }

    const letterSpacing = localStorage.getItem("letterSpacing")
    if (letterSpacing) {
      setLetterSpacing(letterSpacing)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const data = {
    opaque,
    toggleOpaque,
    animation,
    handleAnimation,
    letterSpacing,
    handleSpacing,
  }

  return (
    <AccesibilityContext.Provider value={data}>
      {children}
    </AccesibilityContext.Provider>
  )
}

export { AccesibilityProvider }
export default AccesibilityContext
