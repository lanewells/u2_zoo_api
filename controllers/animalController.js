const Animal = require('../models/animal')

const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAnimalById = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id)
        const animal = await Animal.findById(id)
        if (animal) {
            return res.json(animal)
        } else {
        return res.status(404).send(`that animal doesn't exist`)
        }
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`that animal doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const createAnimal = async (req, res) => {
    try { 
        const newAnimal = await new Animal(req.body)
        await newAnimal.save()
        return res.status(201).json({
            newAnimal
        })
    }   catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateAnimal = async (req, res) => {
    try {
        let id = req.params
        const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
        if (animal) {
            return res.status(200).json(animal)
        }
        throw new Error("animal not found")
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Animal.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("animal deleted")
        }
        throw new Error("animal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
}