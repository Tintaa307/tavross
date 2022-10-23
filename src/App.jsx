import { useState, useEffect, useContext } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import ScrollReveal from "scrollreveal"
import Login from "./components/login/Login"
import Settings from "./components/settings/Settings"
import Page404 from "./components/notFound/Page404"
import CreateRutine from "./components/rutines/CreateRutine"
import ThemeContext from "./context/ThemeContext"

function App() {
  const [hide, setHide] = useState("")

  const path = window.location.pathname
  console.log(path)

  const hanldleUrl = () => {
    path === "/register" ? setHide("hide") : setHide("")
  }

  const { color } = useContext(ThemeContext)

  useEffect(() => {
    hanldleUrl()
  }, [path])

  return (
    <>
      <div color={color} className="container-all">
        <BrowserRouter>
          <Nav hide={hide} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/create/rutine" element={<CreateRutine />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
