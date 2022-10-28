import React, { useEffect } from "react"
import "./home.css"
import Image from "../../assets/img-home.png"
import Rutines from "../rutines/Rutines"
import Calculadora from "../calculadora/Calculadora"
import ScrollReveal from "scrollreveal"
import Graphics from "../graphics/Graphics"
import { useState } from "react"
import Contact from "../contact/Contact"
import { useTranslation } from "react-i18next"

const Home = () => {
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-presentation", {
      delay: 400,
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: false,
    })

    sr.reveal(".container-tri-tre", {
      delay: 400,
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
    })

    sr.reveal(".container-tri-dos", {
      delay: 300,
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
    })

    sr.reveal(".container-tri-uno", {
      delay: 200,
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
    })
  })

  return (
    <>
      <div id="Home" className="ancla"></div>
      <main className="container-main">
        <div className="container-home">
          <div className="container-triangle container-tri-tre"></div>
          <div className="container-triangle container-tri-dos"></div>
          <div className="container-triangle container-tri-uno"></div>
          <div className="container-presentation">
            <div className="content-presentation">
              <h1>{t("home.construiTu")}</h1>
              <h2>{t("home.cuerpoIdeal")}</h2>
              <p>{t("home.descripcionHome")}</p>
              <div className="container-a">
                <a href="#Rutines">
                  {t("home.comienza")}
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container-rutinas">
        <Rutines />
      </div>
      <div className="container-calculadora">
        <Calculadora />
      </div>
      <div className="container-graphics">
        <Graphics />
      </div>
      <div className="container-contact">
        <Contact />
      </div>
    </>
  )
}

export default Home
