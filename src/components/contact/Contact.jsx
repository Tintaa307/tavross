import React from "react"
import "./contact.css"
import { useTranslation } from "react-i18next"


const Contact = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="section-contact">
      <div className="container-content-contact">
        <div className="container-contact-us">
          <h2>{t("contact.contactanos")}</h2>
          <h3>tavross2022@gmail.com</h3>
          <form className="form">
            <textarea placeholder="Ayuda y/o problemas..." />
            <button type="submit">{t("contact.enviar")}</button>
          </form>
        </div>
        <div className="container-name">
          <div className="item">
            <h2>Tavross</h2>
            <p>
            {t("contact.descContac")}
            </p>
            <h6>Tavross Design © 2022</h6>
          </div>
        </div>
        <div className="container-redes">
          <h5>{t("contact.nuestrasRedes")}</h5>
          <div className="red">
            <a href="#">
              <i class="ri-instagram-line"></i>
            </a>
            <h5>Instagram</h5>
          </div>
          <div className="red">
            <a href="#">
              <i class="ri-twitter-line"></i>
            </a>
            <h5>Twitter</h5>
          </div>
          <div className="red">
            <a href="#">
              <i class="ri-github-line"></i>
            </a>
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
