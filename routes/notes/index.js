const router = require('express').Router()
const createNoteHandler = require('./create')
const listNoteHandler = require('./list')
const deleteNoteHandler = require('./delete')
const updateNoteHandler = require('./update')



router.post('/create', createNoteHandler);
router.get('/list', listNoteHandler);
router.put('/update/:id', updateNoteHandler);
router.delete('/delete/:id', deleteNoteHandler);


module.exports = router;
