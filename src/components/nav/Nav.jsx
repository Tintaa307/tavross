import React from "react"
import "./nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="header-container">
      <nav className="container-nav">
        <div className="container-name">
          <h4>🦾TAVROSS</h4>
        </div>
        <div className="container-list">
          <ul className="list">
            <li>
              <a href="#Home">INICIO</a>
            </li>
            <li>
              <a href="#Rutines">RUTINAS</a>
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
