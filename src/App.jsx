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
import ShowUserRutines from "./components/rutines/ShowUserRutines"
import Ejercicios from "./components/rutines/Ejercicios"
import RutineExercises from "./components/rutines/RutineExercises"
import AddExercises from "./components/rutines/AddExercises"
import Preload from "./components/preload/Preload"
import SeeRutines from "./components/rutines/examples/SeeRutines"
import AccesibilityContext from "./context/AccesibilityContext"

function App() {
  const [hide, setHide] = useState("")
  const [loading, setLoading] = useState(true)

  const path = window.location.pathname

  const hanldleUrl = () => {
    path === "/register" ? setHide("hide") : setHide("")
  }

  const { color } = useContext(ThemeContext)
  const { opaque, animation, letterSpacing } = useContext(AccesibilityContext)

  useEffect(() => {
    hanldleUrl()
  }, [path])

  return (
    <>
      {loading ? (
        <Preload setLoading={setLoading} />
      ) : (
        <div
          letterSpacing={letterSpacing}
          animation={animation}
          opaque={opaque}
          color={color}
          className="container-all"
        >
          <BrowserRouter>
            <Nav hide={hide} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings/:id" element={<Settings />} />
              <Route path="/create/rutine/:id" element={<CreateRutine />} />
              <Route path="/show/rutines/:id" element={<ShowUserRutines />} />
              <Route path="/exercises" element={<Ejercicios />} />
              <Route path="/add/exercises/:id" element={<AddExercises />} />
              <Route
                path="/rutina/ejercicios/:id"
                element={<RutineExercises />}
              />
              <Route path="/see/rutines/:id" element={<SeeRutines />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  )
}

export default App
