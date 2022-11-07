import { Sequelize } from "sequelize"

const bd = new Sequelize("tavross", "root", "", {
  dialect: "mysql",
  host: "localhost",
})

export default bd
