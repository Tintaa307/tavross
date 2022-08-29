import express from "express"
import { createUser, updateUser } from "../controller/userController.js"

const router = express.Router()

router.post("/", createUser)
router.put("/:id", updateUser)

export default router
