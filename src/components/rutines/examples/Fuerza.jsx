import React, { useState, useEffect } from "react"
import "../rutines.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Fuerza = () => {
  const [t, i18n] = useTranslation("global")
  const [rutina, setRutina] = useState([
    {
      id: 1,
      nombre: "Sentadillas",
      peso: "5kg",
      repeticiones: "10",
    },
    {
      id: 2,
      nombre: "Peso muerto",
      peso: "10kg",
      repeticiones: "10",
    },
    {
      id: 3,
      nombre: "Fleciones de brazo",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
    {
      id: 4,
      nombre: "Remo con mancuerna",
      peso: "5kg",
      repeticiones: "10",
    },
    {
      id: 5,
      nombre: "Estocadas",
      peso: "3kg",
      repeticiones: "10",
    },
    {
      id: 6,
      nombre: "Banco de tricep",
      peso: t("rutinas.sinPeso"),
      repeticiones: "10",
    },
  ])
  return (
    <section className="section-fuerza">
      <h1>{t("rutinas.rutinaDeFuerza")}</h1>
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

export default Fuerza
