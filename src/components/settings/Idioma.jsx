import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./settings.css"
import Espana from "../../assets/img-españa.png"
import EstadosUnidos from "../../assets/img-EstadosUnidos.png"
import Francia from "../../assets/img-francia.png"
import Italia from "../../assets/img-italiano.png"
import { useTranslation } from "react-i18next"

const Idioma = ({ move }) => {
  const [idioma, setIdioma] = useState("es")
  const [t, i18n] = useTranslation("global")
  const [active, setActive] = useState("")
  const navigate = useNavigate()

  const saveData = () => {
    localStorage.setItem("idioma", idioma)
    navigate("/settings")
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
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("ita")
                  setActive("borderOne")
                  localStorage.getItem("idioma")
                }}
                src={Italia}
                className={"img"}
              />
            </div>
            <div className="idioma">
              <img
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("en")
                  setActive("borderTwo")
                  localStorage.getItem("idioma")
                }}
                src={EstadosUnidos}
                className={"img"}
              />
            </div>
            <div className="idioma">
              <img
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setIdioma("fr")
                  setActive("borderThree")
                  localStorage.getItem("idioma")
                }}
                src={Francia}
                className={"img"}
              />
            </div>
            <div className="idioma">
              <img
                onClick={() => {
                  i18n.changeLanguage(idioma)
                  setActive("borderFour")
                  setIdioma("es")
                  localStorage.getItem("idioma")
                }}
                src={Espana}
                className={"img"}
              />
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
