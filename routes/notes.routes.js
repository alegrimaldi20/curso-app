const { Router } = require('express')
const router = Router()

const { renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deleteNote } = require('../controllers/notes.controllers');
const { isAuthenticated } = require('../helpers/auth');

//New Notes
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

//get all notes
router.get('/notes', renderNotes)

//edit notes
router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit/:id', updateNote)

//Delete notes

router.delete('/notes/delete/:id', deleteNote)

module.exports = router
