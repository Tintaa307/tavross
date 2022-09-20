import React from "react"
import "./notFound.css"
import { Link } from "react-router-dom"

const page404 = () => {
  return (
    <div className="container-not-found">
      <div className="container-404-title">
        <h2>PAGE NOT FOUND</h2>
        <h1>404</h1>
      </div>
      <Link to={"/"} className="link404">
        VOLVER <i className="ri-arrow-left-line"></i>
      </Link>
    </div>
  )
}

export default page404
