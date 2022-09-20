import React, { useState, useRef, useEffect } from "react"
import "./graphics.css"
import * as V from "victory"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack } from "victory"

const Graphics = () => {
  const [title, setTitle] = useState("Example...")
  const exRef = useRef(null)
  const pesoRef = useRef(null)
  const repsRef = useRef(null)
  const [data, setData] = useState([
    {
      peso: 12,
      repeticiones: 10,
    },
    {
      peso: 13,
      repeticiones: 11,
    },
    {
      peso: 14,
      repeticiones: 12,
    },
    {
      peso: 15,
      repeticiones: 13,
    },
  ])

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
          <div className="graphic">
            <VictoryChart domainPadding={22} theme={VictoryTheme.material}>
              <VictoryStack colorScale={"warm"}>
                <VictoryBar data={data} y="repeticiones" x="peso" />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Graphics
