const router = require('express').Router();
const { notes } = require('../../data/notes.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
   const note = createNewNote(req.body, notes);
   res.json(note); 
});

module.exports = router;