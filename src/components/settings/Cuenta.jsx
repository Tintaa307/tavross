import React, { useState, useRef } from "react"
import "./settings.css"
import axios from "axios"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"


const URI = "http://localhost:8000/usuarios/"

const Cuenta = ({ move }) => {
  const [t, i18n] = useTranslation("global")
  const [image, setImage] = useState("")
  const fileRef = useRef(null)
  const imageRef = useRef(null)
  const newNameRef = useRef(null)
  const newEmailRef = useRef(null)
  const newBioRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleImage = () => {
    fileRef.current.click()
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const newName = newNameRef.current.defaultValue
    const newEmail = newEmailRef.current.defaultValue
    const newBio = newBioRef.current.defaultValue

    axios.post(URI + id, {
      nombre: newName,
      email: newEmail,
      descripcion: newBio,
    })
    navigate("/settings")
  }

  return (
    <section className={["section-cuenta", move].join(" ")}>
      <div className="container-cuenta-info">
        <div className="container-cuenta-title">
          <h2>{t("account.tuCuenta")}</h2>
        </div>
        <form onSubmit={handleUpload} className="container-info-user">
          <div className="img-user-edit">
            <h4>{t("account.imagenDePerfil")}</h4>
            <div className="img-editor">
              <input type="file" ref={fileRef} style={{ display: "none" }} />
              <img src={image} ref={imageRef} className="current-img" />
            </div>
            <div onClick={handleImage} className="btn-edit">
              <i class="ri-pencil-line"></i>
              <span>{t("account.editar")}</span>
            </div>
          </div>
          <div className="item">
            <h4>{t("account.nombre")}</h4>
            <input type="text" defaultValue={"Valentin Gonzalez"} />
            <p>
            {t("account.info1")}
            </p>
          </div>
          <div className="item">
            <h4>Email</h4>
            <input type="text" defaultValue={"Valentinta@icloud.com"} />
            <p>
            {t("account.info2")}
            </p>
          </div>
          <div className="item">
            <h4>{t("account.bio")}</h4>
            <textarea placeholder="Escribe una breve descripción de ti..."></textarea>
            <p>{t("account.info3")}</p>
          </div>
          <button type="submit">{t("account.guardarCambios")}</button>
        </form>
      </div>
    </section>
  )
}

export default Cuenta
