import express from "express"
import {
  createRutine,
  getRutines,
  getRutineById,
  updateRutine,
  deleteRutine,
} from "../controller/RutinesController.js"

const router = express.Router()

// rutas de rutinas
router.post("/", createRutine)
router.get("/", getRutines)
router.get("/:id", getRutineById)
router.put("/:id", updateRutine)
router.delete("/:id", deleteRutine)

export default router
