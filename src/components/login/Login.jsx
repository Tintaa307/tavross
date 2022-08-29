import React, { useState, useEffect, useRef } from "react"
import "./login.css"
import Image from "../../assets/loginPerson.png"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import ScrollReveal from "scrollreveal"

const URI = "http://localhost:8000/usuarios"

const Login = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-login-img", {
      delay: 400,
      origin: "left",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-form-login", {
      delay: 400,
      origin: "right",
      distance: "100px",
      duration: 1000,
    })
  })

  return (
    <div className="container-register">
      <div className="container-content-register">
        <div className="container-login-img">
          <img src={Image} alt="" />
        </div>
        <div className="container-form-login">
          <form className="form" autoComplete="off">
            <h2 className="title">INICIAR SESION</h2>
            <div className="input-div one ">
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <input
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
                  name={"password"}
                  type="password"
                  placeholder="Password..."
                  className="input"
                />
              </div>
            </div>
            <button type="submit" className="boton-neon">
              INICIAR SESION
            </button>
            <div className="container-already">
              <h5>
                ¿No te has registrado?{" "}
                <Link className="inicia-sesion" to={"/register"}>
                  Registrate.
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
