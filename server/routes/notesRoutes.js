const express = require('express')
const router = express.Router()
const Note = require('../models/notesModels')
const notesController = require("../controllers/notesController")

//CRUD FOR THE NOTES
//ADD Notes according to the course and unit
router.post("/course/unit/notes", notesController.createNote)

//READ Notes according to course and unit
router.get("/course/unit/notes", notesController.readAllNotes)

//READ speecific notes
router.get("/course/unit/notes/:id", notesController.readNote)

//UPDATE Notes
router.put("/course/unit/notes/:id", notesController.updateNote)

//DELETE
router.delete("/course/unit/notes/:id", notesController.deleteNote)

module.exports = router