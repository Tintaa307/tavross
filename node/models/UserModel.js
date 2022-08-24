import bd from "../dataBase/bd.js"
import { DataTypes } from "sequelize"

const UserModel = bd.define("usuarios", {
  nombre: { type: DataTypes.STRING },
  contrasenia: { type: DataTypes.TEXT },
  email: { type: DataTypes.TEXT },
})

export default UserModel
