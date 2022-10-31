import bd from "../dataBase/bd.js"
import { DataTypes } from "sequelize"

const UserExercisesModel = bd.define("ejerciciosrutinas", {
  nombre: { type: DataTypes.STRING },
  repeticiones: { type: DataTypes.INTEGER },
  peso: { type: DataTypes.INTEGER },
  rutina_id: { type: DataTypes.INTEGER },
})

export default UserExercisesModel
