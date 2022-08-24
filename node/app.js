import express from "express"
import cors from "cors"
import userRoutes from "./routers/router.js"
import bd from "./dataBase/bd.js"

const app = express()

// hello world

app.get("/", (req, res) => {
  res.send("hello world")
})

// config app

app.use(cors())
app.use(express.json())
app.use("/usuarios", userRoutes)

// try connection

try {
  await bd.authenticate()
  console.log("Base de datos conectada")
} catch (error) {
  console.log("no se ha podido conectar", error)
}

// listen port

app.listen(8000, () => {
  console.log("server running on port 8000")
})
