import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import "./graphics.css"
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import { useTranslation } from "react-i18next"
// import Swiper core and required modules
import { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Graphics = () => {
  const [t, i18n] = useTranslation("global")
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

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv")

    root.setThemes([am5themes_Animated.new(root)])
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    )

    let data = [
      {
        category: "Research",
        value1: 1000,
        value2: 588,
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800,
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230,
      },
    ]

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    )

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    )
    xAxis.data.setAll(data)

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    )
    series1.data.setAll(data)

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    )
    series2.data.setAll(data)

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}))
    legend.data.setAll(chart.series.values)

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}))

    series1.animate({
      key: "startAngle",
      to: 180,
      loops: Infinity,
      duration: 2000,
      easing: am5.ease.yoyo(am5.ease.cubic),
    })

    series2.animate({
      key: "startAngle",
      to: 180,
      loops: Infinity,
      duration: 2000,
      easing: am5.ease.yoyo(am5.ease.cubic),
    })

    return () => {
      root.dispose()
    }
  }, [])

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv2")

    root.setThemes([am5themes_Animated.new(root)])
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    )

    let data = [
      {
        category: "Research",
        value1: 1000,
        value2: 588,
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800,
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230,
      },
    ]

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    )

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    )
    xAxis.data.setAll(data)

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    )
    series1.data.setAll(data)

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    )
    series2.data.setAll(data)

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}))
    legend.data.setAll(chart.series.values)

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}))

    series1.animate({
      key: "startAngle",
      to: 180,
      loops: Infinity,
      duration: 2000,
      easing: am5.ease.yoyo(am5.ease.cubic),
    })

    series2.animate({
      key: "startAngle",
      to: 180,
      loops: Infinity,
      duration: 2000,
      easing: am5.ease.yoyo(am5.ease.cubic),
    })

    return () => {
      root.dispose()
    }
  }, [])

  return (
    <section id="Progress" className="container-section-graphics">
      <h1>{t("progreso.titulo")}</h1>
      <div className="container-form-info">
        <form className="form">
          <h2 style={{ paddingBottom: "10px", fontSize: "28px" }}>
            {t("progreso.ingresaTusDatos")}
          </h2>
          <input
            type="text"
            onChange={handleChange}
            placeholder={t("progreso.ejercicio")}
            ref={exRef}
          />
          <input type="number" placeholder={t("progreso.peso")} ref={pesoRef} />
          <input type="number" placeholder={t("progreso.repeticiones")} ref={repsRef} />
          <button type="submit">{t("progreso.enviar")}</button>
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
              <div
                id="chartdiv"
                style={{
                  width: "100%",
                  height: "340px",
                  padding: "5px 10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="graphics">
            <h3>{title}</h3>
            <div className="graphic">
              <div
                id="chartdiv2"
                style={{
                  width: "100%",
                  height: "340px",
                  padding: "5px 10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Graphics
