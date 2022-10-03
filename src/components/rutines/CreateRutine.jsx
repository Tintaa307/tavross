import React, { useRef, useState } from "react"
import "./createRutine.css"

const CreateRutine = () => {
  const [move, setMove] = useState("")
  const [change, setChange] = useState("")
  const [change2, setChange2] = useState("")
  const nameRef = useRef(null)
  const typeRef = useRef(null)
  const divMuscularRef = useRef(null)
  const sesionesRef = useRef(null)
  const descripcionRef = useRef(null)
  const [res, setRes] = useState("")

  const handleChange = () => {
    if (nameRef.current.value === "" || typeRef.current.value === "") {
      setRes("Todos los campos son requeridos")
    } else {
      change === "" ? setChange("change") : setChange("")
      setRes("")
    }
  }

  const handleMove = () => {
    if (
      divMuscularRef.current.value === "" ||
      sesionesRef.current.value === ""
    ) {
      setRes("Todos los campos son requeridos")
    } else {
      change2 === "" ? setChange2("change") : setChange2("")
      move === "" ? setMove("move") : setMove("")
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
              <div className={["circle", change2].join(" ")}>
                <span>2</span>{" "}
                <i class={["ri-check-line", change2].join(" ")}></i>
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
            <div className={["steps two", change, move].join(" ")}>
              <div className="item">
                <h4>Cantidad de divisiones musculares</h4>
                <select ref={divMuscularRef} className="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="item">
                <h4>Cantidad de sesiones</h4>
                <input ref={sesionesRef} type="number" />
                <div className="message">{res}</div>
              </div>
              <div className="btn-sig" onClick={handleMove}>
                Siguiente
              </div>
            </div>
            <div className={["steps three", move].join(" ")}>
              <div className="item">
                <h4>Descripcion</h4>
                <textarea ref={descripcionRef} />
              </div>
              <button className="btn-sig" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <form className="form"></form>
      </div>
    </div>
  )
}

export default CreateRutine
