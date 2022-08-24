import React from "react"
import "./register.css"
import Image from "../../assets/loginPerson.png"

const Register = () => {
  return (
    <div className="container-register">
      <div className="container-content-register">
        <div className="container-login-img">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register
