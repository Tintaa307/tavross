import React, { useState } from "react"
import "./nav.css"
import { Link } from "react-router-dom"
import ButtonConfig from "./ButtonConfig"
import Settings from "../settings/Settings"
import Logo from "../../assets/pincheTavros.jpg"
import { useTranslation } from "react-i18next"

const Nav = ({ hide }) => {
  const [t, i18n] = useTranslation("global")
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
    <>
      <header className={["header-container", navbar, hide].join(" ")}>
        <nav className="container-nav">
          <div className="container-name">
            <a href="#Home">TAVROSS</a>
          </div>
          <div className="container-list">
            <ul className="list">
              <li>
                <a href="#Rutines">{t("header.rutinas")}</a>
              </li>
              <li>
                <a href="#Calculadora">{t("header.turm")}</a>
              </li>
              <li>
                <a href="#Progress">{t("header.progreso")}</a>
              </li>
              <li>
                <a href="#Contact">{t("header.contacto")}</a>
              </li>
              <li>
                <Link to={"/register"} className="link-nav">
                  {t("header.crearCuenta")}
                </Link>
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
