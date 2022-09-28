import React from "react"
import "./createRutine.css"

const CreateRutine = () => {
  return (
    <div className="container-create-rutine">
      <h1>Crea Tu Rutina</h1>
      <div className="container-form">
        <div className="container-header-pasos">
          <div className="container-headers">
            <div className="item">
              <h5>Paso 1</h5>
              <div className="circle">
                1 <i class="ri-check-line"></i>
              </div>
            </div>
            <div className="item">
              <h5>Paso 2</h5>
              <div className="circle">
                2 <i class="ri-check-line"></i>
              </div>
            </div>
            <div className="item">
              <h5>Fin</h5>
              <div className="circle">
                3 <i class="ri-check-line"></i>
              </div>
            </div>
          </div>
        </div>
        <form className="form"></form>
      </div>
    </div>
  )
}

export default CreateRutine
