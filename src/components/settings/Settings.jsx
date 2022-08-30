import React, { useRef, useState, useEffect } from "react"
import "./settings.css"

const buttons = [
  {
    content: "MI CUENTA",
    className: "boton",
    id: 1,
  },
  {
    content: "ACCESIBILIDAD",
    className: "boton",
    id: 2,
  },
  {
    content: "IDIOMA",
    className: "boton",
    id: 3,
  },
  {
    content: "APARIENCIA",
    className: "boton",
    id: 4,
  },
]

const Settings = () => {
  const indicadorRef = useRef(null)
  const buttonsRef = useRef([])
  const [move, setMove] = useState("one")

  const handleClick = () => {
    const id = buttonsRef.current.id
    console.log(id)
  }

  useEffect(() => {
    console.log(buttonsRef)
    buttonsRef &&
      buttonsRef.forEach((button) => {
        const id = button.id
        if (id === 1) {
          setMove("one")
        } else if (id === 2) {
          setMove("two")
        } else if (id === 3) {
          setMove("three")
        } else {
          setMove("four")
        }
      })
  }, [buttonsRef])

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
                  <div key={index} className="button">
                    <button
                      id={id}
                      ref={buttonsRef}
                      className={[className, move].join(" ")}
                      onClick={handleClick}
                    >
                      {content}
                    </button>
                  </div>
                )
              })}
            </div>
            <div ref={indicadorRef} className="indicador"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
