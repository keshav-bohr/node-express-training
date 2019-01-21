const router = require('express').Router()
const userCreatehandler = require('./create')
const listUsersHandler = require('./list')

router.post('/create', userCreatehandler);
router.get('/list', listUsersHandler);

module.exports = router