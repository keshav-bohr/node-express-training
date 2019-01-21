const express = require('express');
const router = express.Router();
const notes = require('./notes/index')

router.use('/note', notes);

module.exports = router;