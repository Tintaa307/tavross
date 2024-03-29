import React, { useState, useEffect, useRef, useContext } from "react"
import "./login.css"
import Image from "../../assets/loginPerson.png"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"
import AuthContext from "../../context/LoggedContext"

const URI = "http://localhost:8000/usuarios"

const Login = () => {
  const [t, i18n] = useTranslation("global")
  const userRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const { setAuth } = useContext(AuthContext)
  let userData = {}
  let decodedInfo = {}

  useEffect(() => {
    localStorage.getItem("userId")
    localStorage.getItem("userName")
    localStorage.getItem("userEmail")
    localStorage.getItem("auth")
  }, [])

  // useEffect(() => {
  //   const sr = ScrollReveal()

  //   sr.reveal(".container-login-img", {
  //     delay: 400,
  //     origin: "left",
  //     distance: "100px",
  //     duration: 1000,
  //   })

  //   sr.reveal(".container-form-login", {
  //     delay: 400,
  //     origin: "right",
  //     distance: "100px",
  //     duration: 1000,
  //   })
  // })

  const validateUser = async (e) => {
    e.preventDefault()
    await axios
      .post(URI + "/login", {
        nombre: userRef.current.value,
        contrasenia: passwordRef.current.value,
      })
      .then((res) => {
        decodedInfo = res.data.decodedToken
        userData = res.config.data
        userData = JSON.parse(userData)
        localStorage.setItem("userName", userData.nombre)
        localStorage.setItem("auth", res.data.token)
        localStorage.setItem("userId", decodedInfo.userdata.userId)
        localStorage.setItem("userEmail", decodedInfo.userdata.userEmail)
        setAuth(true)
        if (res.data !== "") {
          navigate("/")
        } else {
          return (
            <h4 className="error-message">
              El usuario y/o contraseña son incorrectos
            </h4>
          )
        }
      })
      .catch((error) => {
        console.log(error)
      })
    getDataLogin()
  }

  const getDataLogin = async () => {
    const result = await axios.get(URI + "/login")
    console.log(result.data)
  }

  return (
    <div className="container-register">
      <div className="container-content-register">
        <div className="container-login-img">
          <img src={Image} alt="" />
        </div>
        <div className="container-form-login">
          <form
            onSubmit={(e) => validateUser(e)}
            className="form"
            autoComplete="off"
          >
            <h2 className="title">{t("login.titulo")}</h2>
            <div className="input-div one ">
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <input
                  ref={userRef}
                  name={"username"}
                  placeholder="Username..."
                  type="text"
                  className="input"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fa fa-lock"></i>
              </div>
              <div className="div">
                <input
                  ref={passwordRef}
                  name={"password"}
                  type="password"
                  placeholder="Password..."
                  className="input"
                />
              </div>
            </div>
            <button type="submit" className="boton-neon">
              {t("login.iniciarSesion")}
            </button>
            <div className="container-already">
              <h5>
                {t("login.noTeHasRegistrado")}{" "}
                <Link className="inicia-sesion" to={"/register"}>
                  {t("login.registrarse")}
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
      <div className="container-back-reg">
        <Link to={"/register"} className="link">
          <i className="ri-arrow-left-line"></i>{" "}
        </Link>
      </div>
    </div>
  )
}

export default Login
