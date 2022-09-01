import React, { useRef, useState, useEffect } from "react"
import "./settings.css"
import ProfileImage from "../../assets/gymbro.png"

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

  console.log(fileRef)

  useEffect(() => {
    imageRef && imageRef.current.currentSrc === null
      ? setImage("")
      : setImage("active")
  }, [imageRef])

  return (
    <section className="section-settings">
      <div className="container-settings">
        <div className="container-settings-title">
          <h1>CONFIGURACION</h1>
        </div>
        <div className="container-content-settings">
          <div className="container-info-section">
            <div className="container-cuenta">
              <h2>HOLA @USUARIO</h2>
              <input ref={fileRef} type="file" className="file" />
              <div className="container-img-profile" onClick={handleImage}>
                <img ref={imageRef} className="image-profile" />
                <i class={["ri-user-line", image].join(" ")}></i>
              </div>
              <h3>Nombre...</h3>
              <h3 className="second">Email...</h3>
              <i class="ri-add-circle-line"></i>
              <h6>Mas info</h6>
            </div>
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
