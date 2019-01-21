const models = require('../../models/index');

async function createNote(req, res, next) {
    try {
        const createdTodo = await models.todo.create({
            title: req.body.title,
            body: req.body.body
        })
        res.json({
            todo: createdTodo
        })
    } catch (error) {
        next(error)
    }
}

module.exports = createNote;
