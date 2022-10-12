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
// import Swiper core and required modules
import { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

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
    exRef === "" ? setTitle("Example...") : setTitle(exRef.current.value)
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
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          grabCursor={true}
        >
          <SwiperSlide className="graphics">
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
          </SwiperSlide>
          <SwiperSlide className="graphics">
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Graphics
