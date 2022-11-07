import React, { useContext, useState, useEffect } from "react"
import "./settings.css"
import AccesibilityContext from "../../context/AccesibilityContext"

const Accesibilidad = ({ move }) => {
  const { animation, handleAnimation } = useContext(AccesibilityContext)
  return (
    <section className={["section-accesibilidad", move].join(" ")}>
      <div className="container-accesibilidad-content">
        <div className="container-accesibilidad-title">
          <h2>Accesibilidad</h2>
        </div>
        <div className="container-content-accesibilidad">
          <div style={{ display: "none" }} className="item">
            <h4>Agregar espacio entre las letras</h4>
            <p>
              Esta opcion te permite separar las letras de las palabras para que
              sea mas legible y mas claro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accesibilidad
