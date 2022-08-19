import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"

function App() {
  return (
    <>
      <div className="container-all">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
