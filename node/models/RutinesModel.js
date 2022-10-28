import bd from "../dataBase/bd.js"
import { DataTypes } from "sequelize"

const RutinesModel = bd.define("rutinas", {
  name: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  divMusculares: { type: DataTypes.NUMBER },
  sesiones: { type: DataTypes.NUMBER },
  descripcion: { type: DataTypes.STRING },
  user_rutine: { type: DataTypes.INTEGER },
})

export default RutinesModel
