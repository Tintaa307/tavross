import React, { useState, useEffect } from "react"
import "./rutines.css"
import axios from "axios"

const URI = "http://localhost:8000/exercises/"

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([])

  useEffect(() => {
    getEjercicios()
  }, [])

  const esMayus = (c) => {
    return (
      c.charCodeAt(0) >= "A".charCodeAt(0) &&
      c.charCodeAt(0) <= "Z".charCodeAt(0)
    )
  }

  const normalizarTexto = (str) => {
    // la palabra con la primer latra mayus
    const letraMayus = str.charAt(0).toUpperCase() + str.slice(1)

    // toda la palabra menos la primer mayuscula
    const restoPalabra = letraMayus.slice(1)

    Array.from(restoPalabra).map((l) => {
      return esMayus(l) ? ` ${l}` : l
    })
  }

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
            <h2>{normalizarTexto(nombre)}</h2>
            <p>{descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ejercicios
