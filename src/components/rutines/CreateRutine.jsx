import React, { useRef, useState } from "react"
import "./createRutine.css"

const CreateRutine = () => {
  const [change, setChange] = useState("")
  const nameRef = useRef(null)
  const typeRef = useRef(null)
  const [res, setRes] = useState("")

  const handleChange = () => {
    if (nameRef.current.value === "" || typeRef.current.value === "") {
      setRes("Todos los campos son requeridos")
    } else {
      change === "" ? setChange("change") : setChange("")
      setRes("")
    }
  }

  return (
    <div className="container-create-rutine">
      <h1>Crea Tu Rutina</h1>
      <div className="container-form">
        <div className="container-header-pasos">
          <div className="container-headers">
            <div className="item">
              <h5>Paso 1</h5>
              <div className={["circle", change].join(" ")}>
                <span>1</span>{" "}
                <i class={["ri-check-line", change].join(" ")}></i>
              </div>
            </div>
            <div className="item">
              <h5>Paso 2</h5>
              <div className="circle">
                <span>2</span> <i class="ri-check-line"></i>
              </div>
            </div>
            <div className="item">
              <h5>Fin</h5>
              <div className="circle">
                <span>3</span> <i class="ri-check-line"></i>
              </div>
            </div>
          </div>
          <form className="form">
            <div className={["steps", change].join(" ")}>
              <div className="item">
                <h4>Nombre de la rutina</h4>
                <input ref={nameRef} type="text" />
                <div className="message">{res}</div>
              </div>
              <div className="item">
                <h4>Fin de la rutina</h4>
                <select ref={typeRef} className="select">
                  <option value="salud">Salud</option>
                  <option value="fuerza">Fuerza</option>
                  <option value="cardio">Cardio</option>
                </select>
              </div>
              <div className="btn-sig" onClick={handleChange}>
                Siguiente
              </div>
            </div>
            {/* <button type="submit"></button> */}
          </form>
        </div>
        <form className="form"></form>
      </div>
    </div>
  )
}

export default CreateRutine
