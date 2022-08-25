import React from "react"
import "./settings.css"

const Settings = ({ isOpen }) => {
  return (
    <section className={["section-settings", isOpen].join(" ")}>
      <div className="container-settings">
        <div className="container-settings-title"></div>
      </div>
    </section>
  )
}

export default Settings
