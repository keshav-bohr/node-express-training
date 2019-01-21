const models = require('../../models/index');

async function listAllNotes(req, res, next) {
    try {
        const notes = await models.todo.findAll()
        res.json({
            notes,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = listAllNotes;
