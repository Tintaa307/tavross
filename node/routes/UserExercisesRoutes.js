import express from "express"
import {
  getUserExercises,
  createUserExercises,
  updateUserExercises,
  deleteUserExercises,
} from "../controller/UserExercisesController.js"

const router = express.Router()

router.get("/:id", getUserExercises)
router.post("/", createUserExercises)
router.put("/:id", updateUserExercises)
router.delete("/:id", deleteUserExercises)

export default router
