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

// get one user

export const getOneUser = async (req, res) => {
  try {
    await UserModel.findAll(req.body, {
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

  const verifyPassword = bcrypt.compare(
    contrasenia,
    UserModel.findOne({ where: { id: req.params.id } }).contrasenia
  )

  if (!verifyPassword) return res.send(alert("Las contraseñas no coinciden"))

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
    expires: 0,
  })

  const setCookieRefresh = serialize("RefreshToken", refreshToken, {
    httpOnly: true,
    expires: 0,
  })

  res.setHeader("Set-Cookie", [setCookieAccess, setCookieRefresh])
}
