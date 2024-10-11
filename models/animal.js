const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Animal = new Schema(
    {
        name: { type: String, required: true },
        scientificName: { type: String, required: true },
        subclassification: { type: String, required: true },
        region: { type: String, required: true },
        imageUrl: { type: String, required: true },
        endangered: { type: Boolean, required: true },
        humanDangerScale: { type: Number, required: true, min: 0, max: 5}
    },
    { timestamps: true },
)

module.exports = mongoose.model('animal', Animal)