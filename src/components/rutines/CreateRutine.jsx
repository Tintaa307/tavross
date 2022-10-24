import React, { useRef, useState } from "react"
import "./createRutine.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const URI = "http://localhost:8000/rutines"

const CreateRutine = () => {
  const [t, i18n] = useTranslation("global")
  const [move, setMove] = useState("")
  const [change, setChange] = useState("")
  const [change2, setChange2] = useState("")
  const nameRef = useRef(null)
  const typeRef = useRef(null)
  const divMuscularRef = useRef(null)
  const sesionesRef = useRef(null)
  const descripcionRef = useRef(null)
  const [res, setRes] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const type = typeRef.current.value
    const divMuscular = divMuscularRef.current.value
    const sesiones = sesionesRef.current.value
    const descripcion = descripcionRef.current.value

    const rutina = await axios.post(URI, {
      name: name,
      type: type,
      divMusculares: divMuscular,
      sesiones: sesiones,
      descripcion: descripcion,
    })

    rutina ? navigate("/") : alert("La rutina no se ha podido crear")
  }

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
      <h1>{t("createRoutine.titulo")}</h1>
      <div className="container-form">
        <div className="container-header-pasos">
          <div className="container-headers">
            <div className="item">
              <h5>{t("createRoutine.step")} 1</h5>
              <div className={["circle", change].join(" ")}>
                <span>1</span>{" "}
                <i class={["ri-check-line", change].join(" ")}></i>
              </div>
            </div>
            <div className="item">
              <h5>{t("createRoutine.step")} 2</h5>
              <div className={["circle", change2].join(" ")}>
                <span>2</span>{" "}
                <i class={["ri-check-line", change2].join(" ")}></i>
              </div>
            </div>
            <div className="item">
              <h5>{t("createRoutine.fin")}</h5>
              <div className="circle">
                <span>3</span> <i class="ri-check-line"></i>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className={["steps", change].join(" ")}>
              <div className="item">
                <h4>{t("createRoutine.nombreDeLaRutina")}</h4>
                <input ref={nameRef} type="text" />
                <div className="message">{res}</div>
              </div>
              <div className="item">
                <h4>{t("createRoutine.finDeLaRutina")}</h4>
                <select ref={typeRef} className="select">
                  <option value="salud">{t("createRoutine.salud")}</option>
                  <option value="fuerza">{t("createRoutine.fuerza")}</option>
                  <option value="cardio">{t("createRoutine.cardio")}</option>
                </select>
              </div>
              <div className="btn-sig" onClick={handleChange}>
              {t("createRoutine.siguiente")}
              </div>
            </div>
            <div className={["steps two", change, move].join(" ")}>
              <div className="item">
                <h4>{t("createRoutine.antidadDeSesiones")}</h4>
                <input ref={sesionesRef} type="number" />
                <div className="message">{res}</div>
              </div>
              <div className="item">
                <h4>{t("createRoutine.cantidadDeDivisionesMusculares")}</h4>
                <select ref={divMuscularRef} className="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="btn-sig" onClick={handleMove}>
              {t("createRoutine.siguiente")}
              </div>
            </div>
            <div className={["steps three", move].join(" ")}>
              <div className="item">
                <h4 className="desc">{t("createRoutine.descripcion")}</h4>
                <textarea ref={descripcionRef} />
              </div>
              <button className="btn-sig send" type="submit">
              {t("createRoutine.enviar")}
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
