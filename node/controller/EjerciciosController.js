import ExerciseModel from "../models/EjerciciosModel.js"

// get all exercises

export const getAllExercises = async (req, res) => {
  try {
    const exercise = await ExerciseModel.findAll()
    res.json({ message: "Exercises Found", data: exercise })
  } catch (error) {
    console.log("Hubo un error", error)
  }
}
