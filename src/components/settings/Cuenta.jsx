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
  const [newUserName, setNewUserName] = useState("")
  const [newUserEmail, setNewUserEmail] = useState("")
  const [newUserBio, setNewUserBio] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName")
  const userEmail = localStorage.getItem("userEmail")

  useEffect(() => {
    localStorage.getItem("userBio")
  }, [])

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

  console.log(newUserName)

  const handleUpload = (e) => {
    e.preventDefault()
    if (newUserName !== "" || newUserEmail !== "" || newUserBio !== "") {
      localStorage.setItem("userName", newUserName)
      localStorage.setItem("userEmail", newUserEmail)
      localStorage.setItem("userBio", newUserBio)
    } else {
      setNewUserName(userName)
      setNewUserEmail(userEmail)
    }
    axios.put(URI + id, {
      nombre: newUserName,
      email: newUserEmail,
      bio: newUserBio,
    })
    navigate(`/settings/${id}`)
    window.location.href = window.location.href
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
            <input
              onChange={(e) => setNewUserName(e.target.value)}
              type="text"
              defaultValue={userName === "" ? "@example name" : userName}
            />
            <p>{t("account.info1")}</p>
          </div>
          <div className="item">
            <h4>Email</h4>
            <input
              onChange={(e) => setNewUserEmail(e.target.value)}
              type="text"
              defaultValue={userEmail === "" ? "example@gmail.com" : userEmail}
            />
            <p>{t("account.info2")}</p>
          </div>
          <div className="item">
            <h4>{t("account.bio")}</h4>
            <textarea
              onChange={(e) => setNewUserBio(e.target.value)}
              placeholder={t("account.escribeUnaBreveDescripcion")}
            >
              {localStorage.getItem("userBio")}
            </textarea>
            <p>{t("account.info3")}</p>
          </div>
          <button type="submit">{t("account.guardarCambios")}</button>
        </form>
      </div>
    </section>
  )
}

export default Cuenta
