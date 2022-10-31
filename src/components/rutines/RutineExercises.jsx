import React, { useEffect, useState } from "react"
import "./rutines.css"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useTranslation } from "react-i18next"

const URI = "http://localhost:8000/user/exercises"

const RutineExercises = () => {
  const [rutina, setRutina] = useState([])
  const { id } = useParams()
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    getRutine()
  }, [])

  console.log(rutina)

  const getRutine = async () => {
    await axios
      .get(`${URI}/${id}`)

      .then((res) => {
        console.log(res.data)
        res.data !== null ? setRutina(res.data.data) : setRutina([])
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="section-rutines-exercises">
      <h1>{t("ejercicios.titulo")}</h1>
      <div className="container-exercises-list">
        <div className="container-row">
          <h2>{t("ejercicios.ejercicios")}</h2>
          <ul className="list-exercises">
            {rutina !== null ? (
              rutina.map(({ id, nombre }) => (
                <li key={id}>
                  <h3>{nombre}</h3>
                </li>
              ))
            ) : (
              <h3>{t("ejercicios.noHayEjercicios")}</h3>
            )}
          </ul>
        </div>
        <div className="container-row">
          <h2>{t("ejercicios.pesos")}</h2>
          <ul className="list-pesos">
            {rutina !== null ? (
              rutina.map(({ id, peso }) => (
                <li key={id}>
                  <h3>{peso}</h3>
                </li>
              ))
            ) : (
              <h3>{t("ejercicios.noHayEjercicios")}</h3>
            )}
          </ul>
        </div>
        <div className="container-row">
          <h2>{t("ejercicios.repeticiones")}</h2>
          <ul className="list-repeticiones">
            {rutina !== null ? (
              rutina.map(({ id, repeticiones }) => (
                <li key={id}>
                  <h3>{repeticiones}</h3>
                </li>
              ))
            ) : (
              <h3>{t("ejercicios.noHayEjercicios")}</h3>
            )}
          </ul>
        </div>
      </div>
      <div className="container-add-exercises">
        <Link className="link-add" to={`/add/exercises/${id}`}>
          {t("ejercicios.agregarEjercicio")}
        </Link>
      </div>
      <div className="container-back">
        <Link className="link-back" to={`/#Rutines`}>
          <i className="ri-arrow-left-line"></i>
        </Link>
      </div>
    </section>
  )
}

export default RutineExercises
