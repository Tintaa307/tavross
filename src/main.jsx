import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./context/ThemeContext"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import Global_es from "./translations/es/global.json"
import Global_en from "./translations/en/global.json"
import Global_ita from "./translations/ita/global.json"

const idioma = ""
if (localStorage.getItem("idioma")) {
  idioma = localStorage.getItem("idioma")
} else {
  idioma = "es"
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: idioma,
  resources: {
    es: {
      global: Global_es,
    },
    en: {
      global: Global_en,
    },
    ita: {
      global: Global_ita,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
