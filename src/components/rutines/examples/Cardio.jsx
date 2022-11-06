import React, { useState, useEffect } from "react"
import "../rutines.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Cardio = () => {
  const [t, i18n] = useTranslation("global")
  const [rutina, setRutina] = useState([
    {
      id: 1,
      nombre: "Sentadilla con balanceo",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 2,
      nombre: "Sentadilla con salto",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 3,
      nombre: "Cangrejo tocando el pie",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 4,
      nombre: "Toques de pies laterales",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 5,
      nombre: "Muñeca a los tobillos",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 6,
      nombre: "Esquiadores",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
  ])
  return (
    <section className="section-cardio">
      <h1>{t("rutinas.rutinaDeCardio")}</h1>
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
      <div className="container-back">
        <Link className="link-back" to="/">
          <i className="ri-arrow-left-line"></i>
        </Link>
      </div>
    </section>
  )
}

export default Cardio
