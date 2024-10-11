const Type = require('../models/type')

const getAllTypes = async (req, res) => {
    try {
        const types = await Type.find()
        res.json(types)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTypeById = async (req, res) => {
    try {
        let { id } = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        } else {
        return res.status(404).send(`that type doesn't exist`)
        }
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`that type doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const createType = async (req, res) => {
    try { 
        const newType = await new Type(req.body)
        await newType.save()
        return res.status(201).json({
            newType
        })
    }   catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateType = async (req, res) => {
    try {
        let { id } = req.params
        const type = await Type.findByIdAndUpdate(id, req.body, { new: true })
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error("type not found")
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("type deleted")
        }
        throw new Error("type not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMarsupial = async (req, res) => {
    try {
        const marsupials = await Type.findOne({name: 'Marsupial'}).populate('animalIds')
        res.json(marsupials)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMammal = async (req, res) => {
    try {
        const eutherians = await Type.findOne({name: 'Mammal'}).populate('animalIds')
        res.json(eutherians)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReptile = async (req, res) => {
    try {
        const reptiles = await Type.findOne({name: 'Reptile'}).populate('animalIds')
        res.json(reptiles)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType,
    getMarsupial,
    getReptile,
    getMammal
}