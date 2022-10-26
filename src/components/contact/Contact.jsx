import React, { useEffect } from "react"
import "./contact.css"
import { useTranslation } from "react-i18next"
import ScrollReveal from "scrollreveal"

const Contact = () => {
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-name", {
      delay: 400,
      origin: "top",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-redes", {
      delay: 500,
      origin: "left",
      distance: "100px",
      duration: 1000,
    })

    sr.reveal(".container-contact-us", {
      delay: 600,
      origin: "right",
      distance: "100px",
      duration: 1000,
    })
  }, [])

  return (
    <section className="section-contact">
      <div className="container-content-contact">
        <div className="container-contact-us">
          <h2>{t("contact.contactanos")}</h2>
          <h3>tavross2022@gmail.com</h3>
          <form className="form">
            <textarea placeholder={t("contact.ayuda")} />
            <button type="submit">{t("contact.enviar")}</button>
          </form>
        </div>
        <div className="container-name">
          <div className="item">
            <h2>Tavross</h2>
            <p>{t("contact.descpContact")}</p>
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
