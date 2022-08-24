import React from "react"
import "./nav.css"

const ButtonConfig = ({ isOpen, handleOpen, handleClose }) => {
  return (
    <div className="container-buttons-config">
      <div className="container-buttons">
        <div className={["button-rueda", isOpen].join(" ")}>
          <i onClick={handleOpen} class="ri-settings-2-line"></i>
        </div>
        <div className={["button-back", isOpen].join(" ")}>
          <i onClick={handleClose} class="ri-arrow-left-line"></i>
        </div>
      </div>
    </div>
  )
}

export default ButtonConfig
