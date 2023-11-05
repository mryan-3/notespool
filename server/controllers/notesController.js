const Note = require("../models/notesModels")
const express = require("express")

module.exports = {
    //CREATE NOTES
    createNote: (req, res) => {
        Note.create()
        .then(notes => res.status(201).json(notes))
        .catch( err => console.log(err))
    },

    //READ ALL THE NOTES
    readAllNotes: (req, res) => {
        Note.find()
            .then(notes => res.send(notes))
            .catch( err => console.log(err))
    },

    //READ By ID
    readNote: (req, res) => {
        Note.findById(req.params.id)
            .then(note => {
                if (note)
                    res.send(note)
                else 
                    res.status(404).json({error: "No record with given id"})
            })
    },

    //UPDATE a Note
    updateNote: (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req,body)
            .then(notes => res.send(notes))
            .catch(err => res.status(400).json(err))
    },

    //DELETE A NOTE
    deleteNote: (req, res) => {
        Note.findByIdAndDelete(req.params.id, req.body)
            .then(note => res.send(note))
            .catch(err => res.status(400).json(err))
    }
}