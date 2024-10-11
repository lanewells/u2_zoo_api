const express = require('express')
const db = require('./db')
const animalController = require('./controllers/animalController')
const typeController = require('./controllers/typeController')
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`running on port: ${PORT}`))

app.get('/', (req, res)=> {
    res.send('welcome to the zoo page!')
})

app.get('/types/marsupials', typeController.getMarsupial)
app.get('/types/mammals', typeController.getMammal)
app.get('/types/reptiles', typeController.getReptile)

app.get('/animals', animalController.getAllAnimals)
app.get('/animals/:id', animalController.getAnimalById)
app.post('/animals', animalController.createAnimal)
app.put('/animals/:id', animalController.updateAnimal)
app.delete('/animals/:id', animalController.deleteAnimal)

app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypeById)
app.post('/types', typeController.createType)
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)