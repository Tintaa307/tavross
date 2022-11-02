import React, { useRef, useState, useEffect, useContext } from "react"
import "./settings.css"
import ProfileImage from "../../assets/gymbro.png"
import Cuenta from "./Cuenta"
import Apariencia from "./Apariencia"
import Idioma from "./Idioma"
import Accesibilidad from "./Accesibilidad"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../context/LoggedContext"

const Settings = () => {
  const [t, i18n] = useTranslation("global")
  const [move, setMove] = useState("one")
  const { setIsLogged, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName")
  const auth = localStorage.getItem("auth")

  const handleLogOut = () => {
    localStorage.setItem("auth", "notLogged")
    setAuth(false)
    navigate("/")
  }

  const buttons = [
    {
      content: t("settings.miCuenta"),
      className: "boton",
      id: "one",
      icon: "ri-user-line",
    },
    {
      content: t("settings.accesibilidad"),
      className: "boton",
      id: "two",
      icon: "fas fa-wheelchair",
    },
    {
      content: t("settings.idioma"),
      className: "boton",
      id: "three",
      icon: "fas fa-language",
    },
    {
      content: t("settings.apariencia"),
      className: "boton",
      id: "four",
      icon: "fas fa-palette",
    },
  ]

  return (
    <section className="section-settings">
      <div className="container-settings">
        <div className="container-settings-title">
          <h1>{t("settings.titulo")}</h1>
        </div>
        <aside className="config-aside">
          <div className="personal-info-top">
            <div className="container-profile-img">
              <img src={""} className="img-profile" />
            </div>
            <h2>
              {auth !== "notLogged" ? userName : t("account.noTienesCuentaAun")}
            </h2>
            <h3>{t("settings.tuCuentaPersonal")}</h3>
          </div>
          <div className="container-list-config">
            <ul className="list-config">
              {buttons.map(({ content, className, id, icon }, index) => (
                <li
                  key={index}
                  id={id}
                  className={className}
                  onClick={() => setMove(id)}
                >
                  <i className={icon}></i>
                  <h6>{content}</h6>
                </li>
              ))}
            </ul>
            <div className="container-quit-sesion">
              <button onClick={handleLogOut} className="quit-sesion">
                <i className="ri-door-open-line"></i>
                {t("settings.cerrarSesion")}
              </button>
            </div>
          </div>
        </aside>
        <div className="container-config-parts">
          <div className="container-cuenta">
            <Cuenta move={move} />
          </div>
          <div className="container-accesibilidad">
            <Accesibilidad move={move} />
          </div>
          <div className="container-idioma">
            <Idioma move={move} />
          </div>
          <div className="container-apariencia">
            <Apariencia move={move} />
          </div>
        </div>
      </div>
      <div className="container-arrow-back">
        <Link className="link-back" to={"/"}>
          <i className="ri-arrow-left-line"></i>
        </Link>
      </div>
    </section>
  )
}

export default Settings
