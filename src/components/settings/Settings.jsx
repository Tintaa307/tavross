import React, { useRef, useState, useEffect, Children } from "react"
import "./settings.css"

const buttons = [
  {
    content: "MI CUENTA",
    className: "boton",
    id: "one",
  },
  {
    content: "ACCESIBILIDAD",
    className: "boton",
    id: "two",
  },
  {
    content: "IDIOMA",
    className: "boton",
    id: "three",
  },
  {
    content: "APARIENCIA",
    className: "boton",
    id: "four",
  },
]

const Settings = () => {
  const [move, setMove] = useState("one")

  const handleSelected = (e, isSelected) => {
    isSelected = e.target.id
    setMove(isSelected)
  }

  console.log(move)

  return (
    <section className="section-settings">
      <div className="container-settings">
        <div className="container-settings-title">
          <h1>CONFIGURACION</h1>
        </div>
        <div className="container-content-settings">
          <div className="container-info-section">
            <h2>HOLA @USUARIO</h2>
            <input type="file" className="file" />
            <h3>Nombre...</h3>
            <h3 className="second">Email...</h3>
            <i class="ri-add-circle-line"></i>
            <h6>Mas info</h6>
          </div>
          <div className="separador"></div>
          <div className="container-buttons-config">
            <div className="buttons">
              {buttons.map(({ content, className, id }, index) => {
                return (
                  <div key={index} onClick={handleSelected} className="button">
                    <button id={id} className={className}>
                      {content}
                    </button>
                  </div>
                )
              })}
            </div>
            <div className={["indicador", move].join(" ")}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
