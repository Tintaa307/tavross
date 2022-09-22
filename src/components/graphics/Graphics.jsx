import React, { useState, useRef, useEffect, useMemo } from "react"
import "./graphics.css"
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from "victory"

const Graphics = () => {
  const [title, setTitle] = useState("Example...")
  const exRef = useRef(null)
  const pesoRef = useRef(null)
  const repsRef = useRef(null)
  const [data, setData] = useState([
    {
      peso: 12,
      repeticiones: 2,
    },
    {
      peso: 13,
      repeticiones: 8,
    },
    {
      peso: 14,
      repeticiones: 12,
    },
    {
      peso: 15,
      repeticiones: 18,
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
            <VictoryChart
              className="chart"
              animate={{
                duration: 1500,
                onLoad: { duration: 900 },
              }}
              domainPadding={10}
              width={800}
              height={400}
            >
              <VictoryStack colorScale={"cool"}>
                <VictoryLine
                  style={{
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={data}
                  y="repeticiones"
                  x="peso"
                  interpolation="natural"
                />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Graphics
