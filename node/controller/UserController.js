import UserModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
import bcrypt from "bcrypt"
import { serialize } from "cookie"

// create User

export const createUser = async (req, res) => {
  try {
    const { contrasenia } = req.body
    const hash = await bcrypt.hash(contrasenia, 12)
    const data = await UserModel.create({
      ...req.body,
      contrasenia: hash,
    })
    res.json({ message: "user added", data: data })
  } catch (error) {
    console.log(error)
  }
}

// update user

export const updateUser = async (req, res) => {
  try {
    await UserModel.update(req.body, {
      where: { id: req.params.id },
    })
    res.json({ message: "user updated" })
  } catch (error) {
    console.log(error)
  }
}

// get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll()
    res.json({ message: "Users Found", data: users })
  } catch (error) {
    console.log("Hubo un error", error)
  }
}

// get one user

export const getOneUser = async (req, res) => {
  try {
    await UserModel.findAll({
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "user found" })
  } catch (error) {
    console.log("error", error)
  }
}

// get token

export const login = async (req, res) => {
  const { nombre, contrasenia } = req.body

  const user_query = await UserModel.findOne({
    where: { nombre: nombre },
  })

  const userId = user_query.getDataValue("id")
  const userName = user_query.getDataValue("nombre")
  const userEmail = user_query.getDataValue("email")

  console.log(userId, userName, userEmail)

  const token = jwt.sign(
    {
      expiresIn: "15m",
      userdata: {
        userId,
        userName,
        userEmail,
      },
    },
    process.env.SECRET
  )

  const decodedToken = jwt.decode(token)

  const refreshToken = jwt.sign(
    {
      expiresIn: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30,
      id: { where: req.params.id },
    },
    process.env.REFRESH_TOKEN
  )

  const setCookieAccess = serialize("AccessToken", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    path: "/",
  })

  const setCookieRefresh = serialize("RefreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    path: "/",
  })

  if (user_query) {
    const verifyPassword = await bcrypt.compare(
      contrasenia,
      user_query.toJSON().contrasenia
    )

    if (!verifyPassword) {
      console.log("El usuario y/0 contraseña no coinciden")
      res.status(404).send("El usuario y/0 contraseña no coinciden")
    } else {
      console.log("Login Exitoso")
      res.setHeader("Set-Cookie", setCookieRefresh)
      console.log(token)
      res.status(200).send({ token, decodedToken })
    }
  } else {
    console.log("El usuario y/0 contraseña no son correctos")
  }
}
