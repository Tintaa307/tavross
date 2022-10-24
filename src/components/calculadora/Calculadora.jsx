import React, { useRef } from "react"
import { useEffect } from "react"
import "./calculadora.css"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"

const Calculadora = () => {
  const [t, i18n] = useTranslation("global")
  const pesoRef = useRef(null)
  const repsRef = useRef(null)
  const RM1 = useRef(null)
  const RM2 = useRef(null)
  const RM3 = useRef(null)
  const RM4 = useRef(null)
  const RM5 = useRef(null)

  const calcular = (e) => {
    e.preventDefault()
    const peso = pesoRef.current.value
    const reps = repsRef.current.value
    const res1 = Math.ceil(0.0333 * peso * reps + Number(peso))
    const res2 = Math.ceil(res1 * 0.94)
    const res3 = Math.ceil(res1 * 0.901)
    const res4 = Math.ceil(res1 * 0.88)
    const res5 = Math.ceil(res1 * 0.86)
    RM1.current.textContent = res1
    RM2.current.textContent = res2
    RM3.current.textContent = res3
    RM4.current.textContent = res4
    RM5.current.textContent = res5
  }

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-calculadora-title", {
      delay: 400,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-form", {
      delay: 400,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".one", {
      delay: 500,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".two", {
      delay: 600,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".three", {
      delay: 700,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".four", {
      delay: 800,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".five", {
      delay: 900,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })
  }, [])

  return (
    <section id="Calculadora" className="section-calculadora">
      <div className="container-calculadora">
        <div className="container-calculadora-title">
          <h1>{t("calculadora.titulo")}</h1>
          <p>
            {t("calculadora.sub-titulo")} <br /> <br />{" "}
            <span>{t("calculadora.aclaracion")}</span>
          </p>
        </div>
        <div className="container-form">
          <form className="formulario-calc">
            <input ref={pesoRef} type="number" placeholder={t("calculadora.peso")} />
            <input ref={repsRef} type="number" placeholder={t("calculadora.repeticiones")} />
            <button onClick={calcular} type="submit">
              {t("calculadora.enviar")}
            </button>
          </form>
        </div>
        <div className="container-results">
          <div className="container-list">
            <div className="item one">
              <h3>1RM</h3>
              <h4 ref={RM1}>0</h4>
            </div>
            <div className="item two">
              <h3>2RM</h3>
              <h4 ref={RM2}>0</h4>
            </div>
            <div className="item three">
              <h3>3RM</h3>
              <h4 ref={RM3}>0</h4>
            </div>
            <div className="item four">
              <h3>4RM</h3>
              <h4 ref={RM4}>0</h4>
            </div>
            <div className="item five">
              <h3>5RM</h3>
              <h4 ref={RM5}>0</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculadora
