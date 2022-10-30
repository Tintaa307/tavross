import React, { useRef, useState } from "react"
import "./createRutine.css"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const URI = "http://localhost:8000/rutinas/"

const CreateRutine = () => {
  const [t, i18n] = useTranslation("global")
  const [move, setMove] = useState("")
  const [change, setChange] = useState("")
  const [change2, setChange2] = useState("")
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId")

  // estados
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [divMuscular, setDivMuscular] = useState("")
  const [sesiones, setSesiones] = useState("")
  const [descripcion, setDescription] = useState("")

  //refs
  const nameRef = useRef(null)
  const typeRef = useRef(null)
  const divMuscularRef = useRef(null)
  const sesionesRef = useRef(null)
  const descripcionRef = useRef(null)
  const [res, setRes] = useState("")

  console.log(name, type, divMuscular, sesiones, descripcion)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios
      .post(URI, {
        name: name,
        type: type,
        divMusculares: divMuscular,
        sesiones: sesiones,
        descripcion: descripcion,
        user_rutine: userId,
      })
      .then((res) => {
        res.data !== null ? navigate("/") : console.log(res.data)
        window.location.href = window.location.href
      })
      .catch((err) => console.log(err))
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
                <input
                  onChange={(e) => setName(e.target.value)}
                  ref={nameRef}
                  type="text"
                  value={name}
                />
                <div className="message">{res}</div>
              </div>
              <div className="item">
                <h4>{t("createRoutine.FinDeLaRutina")}</h4>
                <select
                  onChange={(e) => setType(e.target.value)}
                  ref={typeRef}
                  className="select"
                >
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
                <h4>{t("createRoutine.cantidadDeSesiones")}</h4>
                <input
                  onChange={(e) => setSesiones(e.target.value)}
                  ref={sesionesRef}
                  type="number"
                />
                <div className="message">{res}</div>
              </div>
              <div className="item">
                <h4>{t("createRoutine.cantidadDeDivisionesMusculares")}</h4>
                <select
                  onChange={(e) => setDivMuscular(e.target.value)}
                  ref={divMuscularRef}
                  className="select"
                >
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
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  ref={descripcionRef}
                />
              </div>
              <button
                onClick={() => console.log("click")}
                type="submit"
                className="btn-sig send"
              >
                {t("createRoutine.enviar")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-link-back">
        <Link className="link-back" to={"/"}>
          <i class="ri-arrow-left-line"></i>
        </Link>
      </div>
    </div>
  )
}

export default CreateRutine
