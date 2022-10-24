import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./settings.css"
import Espana from "../../assets/img-españa.png"
import EstadosUnidos from "../../assets/img-EstadosUnidos.png"

const Idioma = ({ move }) => {
  const [active, setActive] = useState("")
  const navigate = useNavigate()

  const handleActive = () => {
    setActive("active")
  }

  const loadData = () => {
    localStorage.getItem("active")
    if (active) {
      setActive(active)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const saveData = () => {
    localStorage.setItem("active", active)
    navigate("/settings")
  }

  return (
    <section className={["section-idioma", move].join(" ")}>
      <div className="container-idioma-content">
        <div className="container-idioma-title">
          <h2>Idioma</h2>
        </div>
        <div className="container-idioma-options">
          <h3>Selecciona tu idioma</h3>
          <div className="container-idiomas">
            <div className="idioma">
              <div className={["card", active].join(" ")}>
                <i class="ri-check-line"></i>
              </div>
              <img onClick={handleActive} src={Espana} alt="" />
            </div>
            <div className="idioma">
              <div className={["card", active].join(" ")}>
                <i class="ri-check-line"></i>
              </div>
              <img onClick={handleActive} src={EstadosUnidos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Idioma
