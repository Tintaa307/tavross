import bd from "../dataBase/bd.js"
import { DataTypes } from "sequelize"

const ExerciseModel = bd.define("ejercicios", {
  nombre: { type: DataTypes.TEXT },
  descripcion: { type: DataTypes.TEXT },
})

export default ExerciseModel
