const router = require('express').Router()
const createNoteHandler = require('./create')



router.post('/create', createNoteHandler);



module.exports = router;
