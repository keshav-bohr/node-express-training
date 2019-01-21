const express = require('express');
const router = express.Router();
const notes = require('./notes/index')
const users = require('./users/index')

router.use('/note', notes);
router.use('/user', users)

module.exports = router;