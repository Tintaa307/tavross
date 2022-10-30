import bd from "../dataBase/bd.js"
import { DataTypes } from "sequelize"

const UserExercises = bd.define("ejerciciosrutina", {
  name: { type: DataTypes.STRING },
  repeticiones: { type: DataTypes.INTEGER },
  peso: { type: DataTypes.INTEGER },
})

export default UserExercises
