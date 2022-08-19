import React from "react"
import "./nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="header-container">
      <nav className="container-nav">
        <div className="container-name">
          <h4>🦾Tavross</h4>
        </div>
        <div className="container-list">
          <ul className="list">
            <li>
              <a href="#Home">Inicio</a>
            </li>
            <li>
              <a href="#Rutines">Rutinas</a>
            </li>
            <li>
              <a href="#Diet">Progreso</a>
            </li>
            <li>
              <a href="#Contact">Contacto</a>
            </li>
            <li>
              <Link to={"/register"} className="link">
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
