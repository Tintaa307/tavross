import React, { useEffect, useContext } from "react"
import "./rutines.css"
import { Link } from "react-router-dom"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"
import AuthContext from "../../context/LoggedContext"

const Rutines = () => {
  const [t, i18n] = useTranslation("global")
  const { isLogged } = useContext(AuthContext)
  const idUser = localStorage.getItem("userId")

  // useEffect(() => {
  //   const sr = ScrollReveal()
  //   sr.reveal(".container-rutines-title", {
  //     delay: 400,
  //     origin: "top",
  //     distance: "100px",
  //     duration: 1000,
  //   })
  //   sr.reveal(".card", {
  //     delay: 500,
  //     origin: "top",
  //     distance: "100px",
  //     duration: 1000,
  //   })

  //   sr.reveal(".btn-rutina", {
  //     delay: 600,
  //     origin: "top",
  //     distance: "100px",
  //     duration: 1000,
  //   })
  // })

  return (
    <section id="Rutines" className="section">
      <div className="container-rutines-title">
        <h1>{t("rutinas.titulo")}</h1>
      </div>
      <div className="container-section-rutines">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="fa-solid fa-dumbbell" aria-hidden="true"></i>
                </div>
                <h3>{t("rutinas.section1")}</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                {t("rutinas.descpRutine1")}
              </div>
              <a href="#">{t("rutinas.verRutinas")}</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="ri-run-line" aria-hidden="true"></i>
                </div>
                <h3>{t("rutinas.cardio")}</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                {t("rutinas.descpRutine2")}
              </div>
              <a href="#">{t("rutinas.verRutinas")}</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="fa-solid fa-heart-circle-plus"></i>
                </div>
                <h3>{t("rutinas.salud")}</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                {t("rutinas.descpRutine3")}
              </div>
              <a href="#">{t("rutinas.verRutinas")}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-rutinas">
        <div className={["links-rutinas", isLogged].join(" ")}>
          <div className={["btn-rutina", isLogged].join(" ")}>
            <Link to={`exercises`} className="link-rutines">
              {t("rutinas.ejercicios")}
            </Link>
          </div>
          <div className={["btn-rutina", isLogged].join(" ")}>
            <Link to={`/show/rutines/${idUser}`} className="link-rutines">
              {t("rutinas.misRutinas")}
            </Link>
          </div>
          <div className={["btn-rutina", isLogged].join(" ")}>
            <Link to={`/create/rutine/${idUser}`} className="link-rutines">
              {t("rutinas.crearRutina")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rutines
