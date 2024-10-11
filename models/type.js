const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Type = new Schema(
    {
        name: { type: String, required: true },
        animalIds: { type: [Schema.Types.ObjectId], ref: 'Animal' },
        endoTherm: { type: Boolean, required: true },
        hasFur: { type: Boolean, required: true },
        hasScales: { type: Boolean, required: true },
        liveBirths: { type: Boolean, required: true },
        hasBones: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('type', Type)