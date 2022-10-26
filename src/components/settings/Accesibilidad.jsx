import React from "react"
import "./settings.css"

const Accesibilidad = ({ move }) => {
  return (
    <section className={["section-accesibilidad", move].join(" ")}>
      <div className="container-accesibilidad-content">
        <div className="container-accesibilidad-title">
          <h2>Accesibilidad</h2>
        </div>
      </div>
    </section>
  )
}

export default Accesibilidad
