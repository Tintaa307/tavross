import React, { useState, useEffect } from "react"
import "../rutines.css"
import { useParams, Link } from "react-router-dom"
import Fuerza from "./Fuerza"
import Cardio from "./Cardio"
import Salud from "./Salud"

const SeeRutines = () => {
  const { id } = useParams()
  const [appear, setAppear] = useState("")

  console.log(appear)

  useEffect(() => {
    if (id === "1") {
      setAppear("one")
    } else if (id === "2") {
      setAppear("two")
    } else if (id === "3") {
      setAppear("three")
    }
  }, [id])

  return (
    <section className="section-see-rutines">
      <div className="container-content-see-rutines">
        <div className={["container-fuerza", appear].join(" ")}>
          <Fuerza />
        </div>
        <div className={["container-cardio", appear].join(" ")}>
          <Cardio />
        </div>
        <div className={["container-salud", appear].join(" ")}>
          <Salud />
        </div>
      </div>
    </section>
  )
}

export default SeeRutines
