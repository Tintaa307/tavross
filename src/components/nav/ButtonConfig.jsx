import React, { useEffect } from "react"
import "./nav.css"
import ScrollReveal from "scrollreveal"
import { Link } from "react-router-dom"

const ButtonConfig = ({ isOpen, handleOpen, handleClose }) => {
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".rueda", {
      delay: 900,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })
  }, [])
  return (
    <div className="container-buttons-config">
      <div className="container-buttons">
        <div className="button-rueda">
          <Link to={`/settings/${userId}`} className="link-settings">
            <i onClick={handleOpen} className="ri-settings-2-line rueda"></i>
          </Link>
        </div>
        <div className="button-back">
          <Link to={"/"}>
            <i onClick={handleClose} className="ri-arrow-left-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ButtonConfig
