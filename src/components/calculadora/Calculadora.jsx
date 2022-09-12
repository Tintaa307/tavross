import React, { useRef } from "react"
import "./calculadora.css"

const Calculadora = () => {
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
  return (
    <section id="Calculadora" className="section-calculadora">
      <div className="container-calculadora">
        <div className="container-calculadora-title">
          <h1>Calculadora de RM</h1>
          <p>
            Calcula tu meta de resistencia muscular. <br /> <br />{" "}
            <span>Expresado en KG</span>
          </p>
        </div>
        <div className="container-form">
          <form className="formulario-calc">
            <input ref={pesoRef} type="number" placeholder="Peso..." />
            <input ref={repsRef} type="number" placeholder="Repeticiones..." />
            <button onClick={calcular} type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="container-results">
          <div className="container-list">
            <div className="item">
              <h3>1RM</h3>
              <h4 ref={RM1}>0</h4>
            </div>
            <div className="item">
              <h3>2RM</h3>
              <h4 ref={RM2}>0</h4>
            </div>
            <div className="item">
              <h3>3RM</h3>
              <h4 ref={RM3}>0</h4>
            </div>
            <div className="item">
              <h3>4RM</h3>
              <h4 ref={RM4}>0</h4>
            </div>
            <div className="item">
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
