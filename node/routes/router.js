import express from "express"
import {
  createUser,
  updateUser,
  login,
  getOneUser,
  getAllUsers,
} from "../controller/userController.js"

const router = express.Router()

// rutas de autenticaion
router.post("/", createUser)
router.get("/", getAllUsers)
router.post("/login", login)
router.put("/:id", updateUser)
router.get("/:id", getOneUser)

// ruta solo si estas autenticado

export default router
