const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    unit: {
        type: String,
        required: true
    },
    unitCode: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    images: [String],
    pdfs: [String],
    word: [String],
    slides: [String],
    recordings: [String]
})

module.exports = mongoose.model("Note", notesSchema)