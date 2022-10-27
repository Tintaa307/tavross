import React, { useState, useEffect, useRef } from "react"
import "./register.css"
import Image from "../../assets/loginPerson.png"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Username Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Password Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
})

const URI = "http://localhost:8000/usuarios/"

const Register = () => {
  const [t, i18n] = useTranslation("global")

  // useEffect(() => {
  //   const sr = ScrollReveal()

  //   sr.reveal(".container-login-img", {
  //     delay: 400,
  //     origin: "left",
  //     distance: "100px",
  //     duration: 1000,
  //   })

  //   sr.reveal(".container-form", {
  //     delay: 400,
  //     origin: "right",
  //     distance: "100px",
  //     duration: 1000,
  //   })
  // })

  const navigate = useNavigate()

  const saveUser = async (values) => {
    await axios.post(URI, {
      nombre: values.username,
      email: values.email,
      contrasenia: values.password,
    })
    navigate("/login")
  }
  return (
    <div className="container-register">
      <div className="container-content-register">
        <div className="container-login-img">
          <img src={Image} alt="" />
        </div>
        <div className="container-form">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              saveUser(values)
              console.log(values)
            }}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form className="form" autoComplete="off">
                <h2 className="title">{t("register.titulo")}</h2>
                <p>{t("register.subtitulo")}</p>
                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="div">
                    <Field
                      name={"email"}
                      type="email"
                      placeholder="Email..."
                      className="input"
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="error error-email">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="div">
                    <Field
                      name={"username"}
                      placeholder="Username..."
                      type="text"
                      className="input"
                    />
                    {errors.username && touched.username ? (
                      <div className="error error-user">{errors.username}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="div">
                    <Field
                      name={"password"}
                      type="password"
                      placeholder="Password..."
                      className="input"
                    />
                    {errors.password && touched.password ? (
                      <div className="error error-password">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="boton-neon">
                  {t("register.registrarse")}
                </button>
                <div className="container-already">
                  <h5>
                    {t("register.yaTienesCuenta")}{" "}
                    <Link className="inicia-sesion" to={"/login"}>
                      {t("register.iniciarSesion")}
                    </Link>
                  </h5>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="container-back-reg">
        <Link to={"/"} className="link">
          <i className="ri-arrow-left-line"></i>{" "}
        </Link>
      </div>
    </div>
  )
}

export default Register
