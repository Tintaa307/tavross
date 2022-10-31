import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./settings.css"
import Espana from "../../assets/img-españa.png"
import EstadosUnidos from "../../assets/img-EstadosUnidos.png"
import Francia from "../../assets/img-francia.png"
import Italia from "../../assets/img-italiano.png"
import { useTranslation } from "react-i18next"

const Idioma = ({ move }) => {
  const [idioma, setIdioma] = useState("es")
  const [t, i18n] = useTranslation("global")
  const [active, setActive] = useState("four")
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    localStorage.getItem("active")
    if (active) {
      setActive(active)
    }
  }, [])

  const saveData = () => {
    localStorage.setItem("idioma", idioma)
    localStorage.setItem("active", active)
    navigate(`/settings/${userId}`)
  }

  return (
    <section className={["section-idioma", move].join(" ")}>
      <div className="container-idioma-content">
        <div className="container-idioma-title">
          <h2>{t("idioma.titulo")}</h2>
        </div>
        <div className="container-idioma-options">
          <h3>{t("idioma.selecIdioma")}</h3>
          <div className="container-idiomas">
            <div className="idioma">
              <img
                id="one"
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("ita")
                  setActive("one")
                  localStorage.getItem("idioma")
                }}
                src={Italia}
                className="img"
              />
              <div className={["selected1", active].join(" ")}></div>
            </div>
            <div className="idioma">
              <img
                id="two"
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("en")
                  setActive("two")
                  localStorage.getItem("idioma")
                }}
                src={EstadosUnidos}
                className="img"
              />
              <div className={["selected2", active].join(" ")}></div>
            </div>
            <div className="idioma">
              <img
                id="three"
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("fr")
                  setActive("three")
                  localStorage.getItem("idioma")
                }}
                src={Francia}
                className="img"
              />
              <div className={["selected3", active].join(" ")}></div>
            </div>
            <div className="idioma">
              <img
                id="four"
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("es")
                  setActive("four")
                  localStorage.getItem("idioma")
                }}
                src={Espana}
                className="img"
              />
              <div className={["selected4", active].join(" ")}></div>
            </div>
          </div>
          <button className="btn-save" onClick={saveData}>
            {t("account.guardarCambios")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Idioma
