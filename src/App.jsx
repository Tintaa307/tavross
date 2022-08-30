import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import ScrollReveal from "scrollreveal"
import Login from "./components/login/Login"
import Settings from "./components/settings/Settings"

function App() {
  const [hide, setHide] = useState("")
  const path = window.location.pathname
  console.log(path)

  const hanldleUrl = () => {
    path === "/register" ? setHide("hide") : setHide("")
  }

  useEffect(() => {
    hanldleUrl()
  }, [path])

  return (
    <>
      <div className="container-all">
        <BrowserRouter>
          <Nav hide={hide} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
