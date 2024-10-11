const db = require('../db')
const Type = require('../models/type')
const Animal = require('../models/animal')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reptiles = await Animal.find({subclassification: "Diapsida"}).select('_id name')
    const placentalMammals = await Animal.find({subclassification: "Eutheria"}).select('_id name')
    const pouchMammals = await Animal.find({subclassification: "Marsupialia"}).select('_id name')

    const types = [
        {
            name: 'Reptile',
            animalIds: reptiles,
            endoTherm: false,
            hasFur: false,
            hasScales: true,
            liveBirths: false,
            hasBones: true
        },
        {
            name: 'Mammal',
            animalIds: placentalMammals, 
            endoTherm: true,
            hasFur: true,
            hasScales: false,
            liveBirths: true,
            hasBones: true
        },     
        {   
            name: 'Marsupial',
            animalIds: pouchMammals,
            endoTherm: true,
            hasFur: true,
            hasScales: false,
            liveBirths: true,
            hasBones: true
        }
        
    ]
    await Type.insertMany(types)
    console.log('created types with animals!!')
}

const run = async () => {
    await main()
    db.close()
}

run()