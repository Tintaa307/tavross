import express from "express"
import { createUser, updateUser } from "../controller/usersController.js"

const router = express.Router()

router.post("/", createUser)
router.put("/:id", updateUser)

export default router
