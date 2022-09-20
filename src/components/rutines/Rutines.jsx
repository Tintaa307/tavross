import React, { useEffect } from "react"
import "./rutines.css"
import { Link } from "react-router-dom"
import ScrollReveal from "scrollreveal"

const Rutines = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".section", {
      delay: 400,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })
  })

  return (
    <section id="Rutines" className="section">
      <div className="container-rutines-title">
        <h1>RUTINAS</h1>
      </div>
      <div className="container-section-rutines">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="fa-solid fa-dumbbell" aria-hidden="true"></i>
                </div>
                <h3>WIN MUSCLE</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                Rutinas para aquellos que este buscando ganar masa muscular y
                aumentar su fuerza.
              </div>
              <a href="#">VER RUTINAS</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="ri-run-line" aria-hidden="true"></i>
                </div>
                <h3>CARDIO</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                Aquí odrás encontrar rutinas aerobicas y de resistencia, para
                correr, bicicleta, zumba y más.
              </div>
              <a href="#">VER RUTINAS</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="container-rut-data">
                <div className="icon">
                  <i className="fa-solid fa-heart-circle-plus"></i>
                </div>
                <h3>SALUD</h3>
                <div className="container-arrow">
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
              <div className="container-descrip">
                Rutinas diseñadas para aquellas personas que su objetivo sea
                mantenerse saludable.
              </div>
              <a href="#">VER RUTINAS</a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-rutinas">
        <div className="links-rutinas">
          <div className="btn-rutina">
            <Link to={"/me/rutinas"} className="link-rutines">
              Mis Rutinas
            </Link>
          </div>
          <div className="btn-rutina">
            <Link to={"/create/rutine"} className="link-rutines">
              Crear Rutina
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rutines
