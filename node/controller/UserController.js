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
    console.log(hash)
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
  console.log(req.params)

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
  const { id, nombre, contrasenia } = req.body

  const user_query = await UserModel.findOne({
    where: { nombre: nombre },
  })

  const token = jwt.sign(
    {
      expiresIn: "15m",
      data: {
        id,
        nombre,
      },
    },
    process.env.SECRET
  )

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
  })

  const setCookieRefresh = serialize("RefreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  })

  if (user_query) {
    const verifyPassword = await bcrypt.compare(
      contrasenia,
      user_query.toJSON().contrasenia
    )
    !verifyPassword
      ? console.log("El usuario y/0 contraseña no coinciden")
      : res.setHeader("Set-Cookie", [setCookieAccess, setCookieRefresh])
    console.log("Login Exitoso")
  } else {
    console.log("Error")
  }
}
