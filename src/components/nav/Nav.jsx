import React, { useState } from "react"
import "./nav.css"
import { Link } from "react-router-dom"

const Nav = ({ hide }) => {
  const [navbar, setNavbar] = useState("")
  const onScroll = () => {
    if (window.scrollY > 100) {
      setNavbar("active")
    } else {
      setNavbar("")
    }
  }
  window.addEventListener("scroll", onScroll)
  return (
    <header className={["header-container", navbar, hide].join(" ")}>
      <nav className="container-nav">
        <div className="container-name">
          <a href="#Home">🦾TAVROSS</a>
        </div>
        <div className="container-list">
          <ul className="list">
            <li>
              <a href="#Rutines">RUTINAS</a>
            </li>
            <li>
              <a href="#Calculadora">TÚ RM</a>
            </li>
            <li>
              <a href="#Diet">PROGRESO</a>
            </li>
            <li>
              <a href="#Contact">CONTACTO</a>
            </li>
            <li>
              <Link to={"/register"} className="link-nav">
                Crear Cuenta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
