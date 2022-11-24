import React, { useContext, useState, useEffect } from "react"
import "./settings.css"
import AccesibilityContext from "../../context/AccesibilityContext"
import { useTranslation } from "react-i18next"

const Accesibilidad = ({ move }) => {
  const { t, i18n } = useTranslation("global")
  const [spacingState, setSpacingState] = useState("")
  const [animationState, setAnimationState] = useState("")
  const [opaqueState, setOpaqueState] = useState("")
  const {
    animation,
    handleAnimation,
    opaque,
    toggleOpaque,
    letterSpacing,
    handleSpacing,
  } = useContext(AccesibilityContext)

  const activeSpacing = () => {
    setSpacingState("active")
  }

  const activeAnimation = () => {
    setAnimationState("active")
  }

  const activeOpaque = () => {
    setOpaqueState("active")
  }

  const saveData = () => {
    localStorage.setItem("opaque", opaque)
    localStorage.setItem("animation", animation)
    localStorage.setItem("letterSpacing", letterSpacing)
    localStorage.setItem("spacingState", spacingState)
    localStorage.setItem("animationState", animationState)
    localStorage.setItem("opaqueState", opaqueState)
  }

  const dataContent = [
    {
      id: 1,
      title: "Animaciones",
      description: "Activar o desactivar las animaciones de la pagina.",
      activacion: handleAnimation,
      className: animationState,
      active: activeAnimation,
    },
    {
      id: 2,
      title: "Espaciado",
      description: "Aumenta el espaciado entre letras.",
      activacion: handleSpacing,
      className: spacingState,
      active: activeSpacing,
    },
    {
      id: 3,
      title: "Luminosidad",
      description: "Atenua los colores de la pagina.",
      activacion: toggleOpaque,
      className: opaqueState,
      active: activeOpaque,
    },
  ]
  return (
    <section className={["section-accesibilidad", move].join(" ")}>
      <div className="container-accesibilidad-content">
        <div className="container-accesibilidad-title">
          <h2>Accesibilidad</h2>
        </div>
        <div className="container-content-accesibilidad">
          {dataContent.map(
            ({ title, description, activacion, className, active }, index) => (
              <div key={index} className="item">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="container-button">
                  <label class="switch">
                    <input
                      onClick={active}
                      type="checkbox"
                      className={className}
                    />
                    <span onClick={activacion} class="slider"></span>
                  </label>
                </div>
              </div>
            )
          )}
          <button onClick={saveData} type="submit">
            {t("Appearance.guardarCambios")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Accesibilidad
