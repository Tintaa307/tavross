import React, { useEffect } from "react"
import "./home.css"
import Image from "../../assets/img-home.png"
import Rutines from "../rutines/Rutines"
import Calculadora from "../calculadora/Calculadora"
import ScrollReveal from "scrollreveal"
import Graphics from "../graphics/Graphics"
import { useState } from "react"

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-presentation", {
      delay: 400,
      origin: "left",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-tri-tre", {
      delay: 400,
      origin: "right",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-tri-dos", {
      delay: 300,
      origin: "right",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-tri-uno", {
      delay: 200,
      origin: "right",
      distance: "100px",
      duration: 1000,
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
              <h1>CONSTRUÍ TU</h1>
              <h2>CUERPO IDEAL</h2>
              <p>
                En Tavross te vamos a ayudar a formar el cuerpo de tus sueños y
                tener una mejor salud y calidad de vida.
              </p>
              <div className="container-a">
                <a href="#Rutines">
                  Comienza<i className="ri-arrow-right-line"></i>
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
    </>
  )
}

export default Home
