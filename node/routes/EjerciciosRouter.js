import express from "express"
import { getAllExercises } from "../controller/EjerciciosController"

const router = express.Router()

// rutas de ejercicios
router.get("/", getAllExercises)

export default router
