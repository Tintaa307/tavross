import React from "react"
import "./home.css"
import Image from "../../assets/img-home.png"
import Rutines from "../rutines/Rutines"

const Home = () => {
  return (
    <>
      <main className="container-main">
        <div className="container-home">
          <div className="container-triangle container-tri-tre"></div>
          <div className="container-triangle container-tri-dos"></div>
          <div className="container-triangle container-tri-uno"></div>
          <div className="container-presentation">
            <div className="content-presentation">
              <h1>CONSTRUÍ TU</h1>
              <h2>CUERPO IDEAL</h2>
              <p>
                En Tavross te vamos a ayudar a formar el cuerpo de tus sueños y
                tener una mejor salud y calidad de vida.
              </p>
              <div className="container-a">
                <a href="#Rutines">
                  Comienza<i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container-rutinas">
        <Rutines />
      </div>
    </>
  )
}

export default Home
