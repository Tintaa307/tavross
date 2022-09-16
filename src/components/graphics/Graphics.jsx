import React, { useState, useRef, useEffect } from "react"
import "./graphics.css"
import { Bar } from "react-chartjs-2"
import Chart from "chart.js/auto"

const Graphics = ({ chartData }) => {
  const [title, setTitle] = useState("Example...")
  const exRef = useRef(null)
  const pesoRef = useRef(null)
  const repsRef = useRef(null)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <section id="Progress" className="container-section-graphics">
      <h1>PROGRESO</h1>
      <div className="container-form-info">
        <form className="form">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Ejercicio..."
            ref={exRef}
          />
          <input type="number" placeholder="Peso..." ref={pesoRef} />
          <input type="number" placeholder="Repeticiones..." ref={repsRef} />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="container-graphics-info">
        <div className="graphics">
          <h3>{title}</h3>
          <div style={{ color: "#fff" }} className="graphic">
            <Bar data={chartData}></Bar>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Graphics
