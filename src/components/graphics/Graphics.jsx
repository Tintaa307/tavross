import React, { useState, useRef, useEffect } from "react"
import "./graphics.css"
import { Chart } from "react-charts"

const Graphics = () => {
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
        <h2 className="title-ej">{title}</h2>
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
          <h3>Title</h3>
        </div>
      </div>
    </section>
  )
}

export default Graphics
