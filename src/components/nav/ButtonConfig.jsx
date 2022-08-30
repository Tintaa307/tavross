import React from "react"
import "./nav.css"
import { Link } from "react-router-dom"

const ButtonConfig = ({ isOpen, handleOpen, handleClose }) => {
  return (
    <div className="container-buttons-config">
      <div className="container-buttons">
        <div className={["button-rueda", isOpen].join(" ")}>
          <Link to={"/settings"} className="link-settings">
            <i onClick={handleOpen} class="ri-settings-2-line"></i>
          </Link>
        </div>
        <div className={["button-back", isOpen].join(" ")}>
          <Link to={"/"}>
            <i onClick={handleClose} class="ri-arrow-left-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ButtonConfig
