import {
  createRutine,
  getRutines,
  getRutineById,
  updateRutine,
  deleteRutine,
} from "../controllers/RutinesController"

const router = express.Router()

// rutas de rutinas
router.post("/", createRutine)
router.get("/", getRutines)
router.get("/:id", getRutineById)
router.put("/:id", updateRutine)
router.delete("/:id", deleteRutine)

export default router
