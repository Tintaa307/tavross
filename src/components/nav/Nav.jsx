import React, { useState, useEffect, useContext } from "react"
import "./nav.css"
import { Link, useNavigate } from "react-router-dom"
import ButtonConfig from "./ButtonConfig"
import Settings from "../settings/Settings"
import Logo from "../../assets/pincheTavros.jpg"
import { useTranslation } from "react-i18next"
import ScrollReveal from "scrollreveal"
import AuthContext from "../../context/LoggedContext"

const Nav = ({ hide }) => {
  const [t, i18n] = useTranslation("global")
  const [isOpen, setIsOpen] = useState("")
  const [navbar, setNavbar] = useState("")
  const { isLogged } = useContext(AuthContext)
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId")

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

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".nav-item1", {
      delay: 400,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".nav-item2", {
      delay: 500,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".nav-item3", {
      delay: 600,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".nav-item4", {
      delay: 700,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".button-nav", {
      delay: 800,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })
  }, [])

  return (
    <>
      <header className={["header-container", navbar, hide].join(" ")}>
        <nav className="container-nav">
          <div className="container-name">
            <a href="#Home"> {/* <img src={Logo} alt="" />*/ "TAVROSS"}</a>
          </div>
          <div className="container-list">
            <ul className="list">
              <li className="nav-item1">
                <a href="#Rutines">{t("header.rutinas")}</a>
              </li>
              <li className="nav-item2">
                <a href="#Calculadora">{t("header.turm")}</a>
              </li>
              <li className="nav-item3">
                <a href="#Progress">{t("header.progreso")}</a>
              </li>
              <li className="nav-item4">
                <a href="#Contact">{t("header.contacto")}</a>
              </li>
              <li className="button-nav">
                {isLogged === "logged" ? (
                  <>
                    <Link className="link-nav" to={`/settings/${userId}`}>
                      {t("header.tuPerfil")}
                    </Link>
                  </>
                ) : (
                  <Link to={"/register"} className="link-nav">
                    {t("header.crearCuenta")}
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <ButtonConfig
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  )
}

export default Nav
