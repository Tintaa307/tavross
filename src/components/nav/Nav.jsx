import React, { useState } from "react"
import "./nav.css"
import { Link } from "react-router-dom"
import ButtonConfig from "./ButtonConfig"

const Nav = ({ hide }) => {
  const [isOpen, setIsOpen] = useState("")
  const [navbar, setNavbar] = useState("")
  const onScroll = () => {
    if (window.scrollY > 100) {
      setNavbar("active")
    } else {
      setNavbar("")
    }
  }
  window.addEventListener("scroll", onScroll)

  const handleOpen = () => {
    setIsOpen(isOpen === "" ? "open" : "")
  }

  const handleClose = () => {
    setIsOpen("")
  }

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
      <ButtonConfig
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </header>
  )
}

export default Nav
