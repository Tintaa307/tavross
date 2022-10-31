import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import "./rutines.css"
import Image from "../../assets/form-ejercicio.jpg"
import { useTranslation } from "react-i18next"

const URI = "http://localhost:8000/user/exercises"

const AddExercises = () => {
  const [ejercicio, setEjercicio] = useState("")
  const [t, i18n] = useTranslation("global")
  const [peso, setPeso] = useState("")
  const [repeticiones, setRepeticiones] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  const addExercise = async (e) => {
    e.preventDefault()
    if (ejercicio !== "" || peso !== "" || repeticiones !== "") {
      await axios
        .post(URI, {
          nombre: ejercicio,
          peso: peso,
          repeticiones: repeticiones,
          rutina_id: id,
        })
        .then((res) => {
          console.log(res)
          navigate(`/rutina/ejercicios/${id}`)
        })
        .catch((err) => console.log(err))
    } else {
      setMessage("Por favor completa todos los campos")
    }
  }

  return (
    <section className="create-exercises">
      <h1>{t("crearEjercicios.agregaTusEjercicios")}</h1>
      <div className="container-form">
        <form onSubmit={addExercise} className="add-exercises">
          <h2>{t("crearEjercicios.ingresaTusEjercicios")}</h2>
          <div className="container-inputs">
            <input
              onChange={(e) => setEjercicio(e.target.value)}
              type="text"
              placeholder={t("crearEjercicios.ejercicio")}
              value={ejercicio}
            />
            <div className="message">{message}</div>
            <input
              onChange={(e) => setPeso(e.target.value)}
              type="number"
              placeholder={t("crearEjercicios.peso")}
              value={peso}
            />
            <div className="message">{message}</div>
            <input
              onChange={(e) => setRepeticiones(e.target.value)}
              type="number"
              placeholder={t("crearEjercicios.repeticiones")}
              value={repeticiones}
            />
            <div className="message">{message}</div>
          </div>
          <button className="btn-send" type="submit">
            {t("crearEjercicios.enviar")}
          </button>
        </form>
        <div className="container-img">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="container-back">
        <Link className="link-back" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  )
}

export default AddExercises
