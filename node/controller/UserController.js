import UserModel from "../models/usersModel.js"

// create User

export const createUser = async (req, res) => {
  try {
    const data = await UserModel.create(req.body)
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
