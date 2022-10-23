import React, { useEffect, useContext, useState } from "react"
import "./settings.css"
import ThemeContext from "../../context/ThemeContext"
import ScrollReveal from "scrollreveal"
import { useNavigate } from "react-router-dom"
import Red from "../../assets/home-red.png"
import Blue from "../../assets/home-blue.png"
import Purple from "../../assets/home-violet.png"
import Orange from "../../assets/home-orange.png"
import Green from "../../assets/home-green.png"
// import Swiper core and required modules
import { Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const data = [
  {
    id: "red",
    className: "red color",
    img: Red,
    capa: "capa",
    color: "Rojo",
  },
  {
    id: "rosa",
    className: "rosa color",
    img: Purple,
    capa: "capa",
    color: "Rosa",
  },
  {
    id: "green",
    className: "green color",
    img: Green,
    capa: "capa",
    color: "Verde",
  },
  {
    id: "blue",
    className: "blue color",
    img: Blue,
    capa: "capa",
    color: "Azul",
  },
  {
    id: "orange",
    className: "orange color",
    img: Orange,
    capa: "capa",
    color: "Naranja",
  },
]

const Apariencia = ({ move }) => {
  const { color, changeColor } = useContext(ThemeContext)
  const [check, setCheck] = useState("none")
  const navigate = useNavigate()

  const handleConfirmed = () => {
    setCheck("check")
  }

  const saveData = () => {
    localStorage.setItem("color", color)
    navigate("/settings")
  }

  return (
    <section className={["section-apariencia", move].join(" ")}>
      <div className="container-apariencia-content">
        <div className="container-apariencia-title">
          <h2>Apariencia</h2>
        </div>
        <div className="container-apariencia-options">
          <h3>Color de fondo</h3>
          <div className="container-colors">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {data.map(({ className, img, capa, color, id }, index) => (
                <SwiperSlide key={index}>
                  <div onClick={changeColor} className={className}>
                    <img src={img} />
                    <div className={capa}>
                      <div className={["capa-content", id].join(" ")}>
                        <h4>Clickee para seleccionar el color:</h4>
                        <i
                          className={["ri-check-line", color, check].join(" ")}
                        ></i>
                        <h5 className={color}>{color}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button onClick={saveData} type="submit">
            Guardar Cambios
          </button>
        </div>
      </div>
    </section>
  )
}

export default Apariencia
