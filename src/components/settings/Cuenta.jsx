import React, { useState, useRef } from "react"
import "./settings.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const URI = "http://localhost:8000/usuarios/"

const Cuenta = ({ move }) => {
  const [t, i18n] = useTranslation("global")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")
  const fileRef = useRef(null)
  const newNameRef = useRef(null)
  const newEmailRef = useRef(null)
  const newBioRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  useEffect(() => {
    localStorage.getItem("imagen")
    if (preview) {
      setPreview(preview)
    }
  }, [])

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file)
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const newName = newNameRef.current.defaultValue
    const newEmail = newEmailRef.current.defaultValue
    const newBio = newBioRef.current.defaultValue
    localStorage.setItem("imagen", preview)

    axios.put(URI + id, {
      nombre: newName,
      email: newEmail,
      bio: newBio,
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
              <input
                type="file"
                id="files"
                onChange={handleChange}
                accept="image/*"
                ref={fileRef}
                style={{ display: "none" }}
              />
              {preview ? (
                <img src={preview} alt="preview" className="img-preview" />
              ) : (
                <div className="img-preview"></div>
              )}
            </div>
            <div onClick={() => fileRef.current.click()} className="btn-edit">
              <i class="ri-pencil-line"></i>
              <span>{t("account.editar")}</span>
            </div>
          </div>
          <div className="item">
            <h4>{t("account.nombre")}</h4>
            <input type="text" defaultValue={"Valentin Gonzalez"} />
            <p>{t("account.info1")}</p>
          </div>
          <div className="item">
            <h4>Email</h4>
            <input type="text" defaultValue={"Valentinta@icloud.com"} />
            <p>{t("account.info2")}</p>
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
