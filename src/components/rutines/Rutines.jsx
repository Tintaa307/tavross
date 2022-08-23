import React from "react"
import "./rutines.css"
import { Link } from "react-router-dom"

const Rutines = () => {
  return (
    <section className="section">
      <div className="container-rutines-title">
        <h1>RUTINAS</h1>
      </div>
      <div className="container-section-rutines">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="fa-solid fa-dumbbell"></i>
              </div>
              <h3>WIN MUSCLE </h3>
              <div className="container-arrow">
                <i class="ri-arrow-down-line"></i>
              </div>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="ri-run-line" aria-hidden="true"></i>
              </div>
              <h3>CARDIO</h3>
              <div className="container-arrow">
                <i class="ri-arrow-down-line"></i>
              </div>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="fa-solid fa-heart-circle-plus"></i>
              </div>
              <h3>HEALTHY</h3>
              <div className="contaner-arrow">
                <i class="ri-arrow-down-line"></i>
              </div>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
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
