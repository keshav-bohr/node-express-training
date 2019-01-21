const router = require('express').Router()
const userCreatehandler = require('./create')

router.post('/create', userCreatehandler);

module.exports = router