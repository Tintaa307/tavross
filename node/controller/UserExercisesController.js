import UserExercisesModel from "../models/UserExercises.js"

// get rutine exercises

export const getUserExercises = async (req, res) => {
  try {
    const userExercises = await UserExercisesModel.findAll({
      where: { rutina_id: req.params.id },
    })
    userExercises
      ? res
          .status(200)
          .json({ message: "User Exercises Found", data: userExercises })
      : res.status(404).json({ message: "User Exercises Not Found" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create rutine exercise

export const createUserExercises = async (req, res) => {
  try {
    const userExercises = await UserExercisesModel.create(req.body)
    userExercises !== null
      ? res.json({ message: "exercise added", data: userExercises })
      : res.status(404).json({ message: "exercise not added" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// update rutine exercise

export const updateUserExercises = async (req, res) => {
  try {
    await UserExercisesModel.update(req.body, {
      where: { id: req.params.id },
    })
    res.json({ message: "exercise updated" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// delete rutine exercise

export const deleteUserExercises = async (req, res) => {
  try {
    await UserExercisesModel.destroy({
      where: { id: req.params.id },
    })
    res.json({ message: "exercise deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
