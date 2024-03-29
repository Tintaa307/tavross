import axios from "axios"
import React, { useState, useEffect } from "react"
import "./rutines.css"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"

const URI = "http://localhost:8000/rutinas/"

const ShowUserRutines = () => {
  const [rutines, setRutines] = useState([])
  const { id } = useParams()
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    getRutines()
  }, [])

  console.log(rutines)

  const getRutines = async () => {
    await axios
      .get(`${URI}user/${id}`)

      .then((res) => {
        res.data !== null ? setRutines(res.data.data) : setRutines([])
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    localStorage.getItem("divMusculares")
  }, [])

  const deleteRutine = async (id) => {
    await axios.delete(URI + id)
    getRutines()
  }

  const updatedRutine = async (id) => {
    await axios.put(URI + id)
    getRutines()
  }

  return (
    <section className="section-show-rutines">
      <div className="container-content-rutines">
        <div className="container-title-rutines">
          <h1>{t("tusRutinas.titulo")}</h1>
        </div>
        <div className="container-rutinas">
          {rutines !== null ? (
            rutines.map(({ id, name, type, descripcion, divMusculares }) => (
              <div
                onClick={() =>
                  localStorage.setItem("divMusculares", divMusculares)
                }
                className="rutina"
                key={id}
              >
                <div className="info-rutine">
                  <h2>{name}</h2>
                  <h3>
                    {t("tusRutinas.tipoDeLaRutina")}: <span>{type}</span>
                  </h3>
                  <p>{descripcion}</p>
                  <Link
                    to={`/rutina/ejercicios/${id}`}
                    className="link-detalles"
                  >
                    {t("tusRutinas.verDetallesDeLaRutina")}{" "}
                    <i class="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="container-msg">
                <h2 className="msg-no-rutines">
                  No tienes rutinas aun creadas entra{" "}
                  <Link to={`create/rutine/${id}`}>Aqui</Link>
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container-arrow-back">
        <Link className="link-back" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  )
}

export default ShowUserRutines
