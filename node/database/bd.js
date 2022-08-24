import { Sequelize } from "sequelize"

const bd = new Sequelize("tavross", "root", "rootroot", {
  dialect: "mysql",
  host: "localhost",
})

export default bd
