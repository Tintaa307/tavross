import React, { useState, useEffect } from "react"
import "./rutines.css"
import axios from "axios"

const URI = "http://localhost:8000/exercises/"

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([])

  useEffect(() => {
    getEjercicios()
  }, [])

  const getEjercicios = async () => {
    await axios
      .get(URI)

      .then((res) => {
        console.log(res)
        res.data !== null ? setEjercicios(res.data.data) : setEjercicios([])
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="section-ejercicios">
      <h1>Ejercicios</h1>
      <div className="container-ejercicios">
        {ejercicios.map(({ nombre, descripcion }) => (
          <div className="ejercicio">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ejercicios
