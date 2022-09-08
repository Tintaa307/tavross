import express from "express"
import {
  createUser,
  updateUser,
  login,
  getOneUser,
} from "../controller/userController.js"

const router = express.Router()

// rutas de autenticaion
router.post("/", createUser)
router.post("/:id", login)
router.put("/:id", updateUser)
router.get("/:id", getOneUser)

// ruta solo si estas autenticado

export default router
