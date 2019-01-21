const models = require('../../models/index');

async function listAllNotes(req, res, next) {
    try {
        const notes = await models.todo.findAll({
            where: {
                userId: req.query.userId
            }
        })
        res.json({
            notes,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = listAllNotes;
