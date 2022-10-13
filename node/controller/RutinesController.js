import RutinesModel from "../models/RutinesModel"

// create rutine

export const createRutine = async (req, res) => {
  try {
    const rutine = await RutinesModel.create(req.body)
    rutine
      ? res.status(201).json({ message: "Rutine Found", data: rutine })
      : res.status(404).json({ message: "Rutine Not Found" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// get rutines

export const getRutines = async (req, res) => {
  try {
    const rutines = await RutinesModel.findAll()
    rutines
      ? res.status(200).json({ message: "Rutines Found", data: rutines })
      : res.status(404).json({ message: "Rutines Not Found" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// get rutine by id

export const getRutineById = async (req, res) => {
  try {
    const rutine = await RutinesModel.findOne({
      where: { id: req.params.id },
    })
    rutine
      ? res.status(200).json({ message: "Rutine Found", data: rutine })
      : res.status(404).json({ message: "Rutine Not Found" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// update rutine

export const updateRutine = async (req, res) => {
  try {
    const rutine = await RutinesModel.update(req.body, {
      where: { id: req.params.id },
    })
    rutine
      ? res.status(200).json({ message: "Rutine Updated", data: rutine })
      : res.status(404).json({ message: "Rutine Not Found" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// delete rutine

export const deleteRutine = async (req, res) => {
  try {
    const rutine = await RutinesModel.destroy({
      where: { id: req.params.id },
    })
    rutine
      ? res.status(200).json({ message: "Rutine Deleted", data: rutine })
      : res.status(404).json({ message: "Rutine Not Found" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
