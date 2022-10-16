import React, { useRef, useState, useEffect } from "react"
import "./settings.css"
import ProfileImage from "../../assets/gymbro.png"
import Cuenta from "./Cuenta"

const buttons = [
  {
    content: "MI CUENTA",
    className: "boton",
    id: "one",
    icon: "ri-user-line",
  },
  {
    content: "ACCESIBILIDAD",
    className: "boton",
    id: "two",
    icon: "fas fa-wheelchair",
  },
  {
    content: "IDIOMA",
    className: "boton",
    id: "three",
    icon: "fas fa-language",
  },
  {
    content: "APARIENCIA",
    className: "boton",
    id: "four",
    icon: "fas fa-palette",
  },
]

const Settings = () => {
  const [move, setMove] = useState("one")
  const [image, setImage] = useState("")
  const fileRef = useRef(null)
  const imageRef = useRef(null)

  const handleImage = () => {
    fileRef.current.click()
  }

  const handleSelected = (e, isSelected) => {
    isSelected = e.target.id
    setMove(isSelected)
  }

  return (
    <section className="section-settings">
      <div className="container-settings">
        <div className="container-settings-title">
          <h1>CONFIGURACION</h1>
        </div>
        <aside className="config-aside">
          <div className="personal-info-top">
            <input type="file" ref={fileRef} style={{ display: "none" }} />
            <div onClick={handleImage} className="container-profile-img">
              <img src="" className="img-profile" />
            </div>
            <h2>Valentin Gonzalez</h2>
            <h3>Tu cuenta personal</h3>
          </div>
          <div className="container-list-config">
            <ul className="list-config">
              {buttons.map((button) => (
                <li
                  key={button.id}
                  id={button.id}
                  className={button.className}
                  onClick={(e) => handleSelected(e, move)}
                >
                  <i className={button.icon}></i>
                  <h6>{button.content}</h6>
                </li>
              ))}
            </ul>
            <div className="container-quit-sesion">
              <button className="quit-sesion">
                <i className="ri-door-open-line"></i>CERRAR SESION
              </button>
            </div>
          </div>
        </aside>
        <div className="container-config-parts">
          <div className="container-cuenta">
            <Cuenta />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
