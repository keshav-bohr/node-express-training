const models = require('../../models/index');

async function updateNoteHandler(req, res, next) {
    try {
        const note = await models.todo.findOne({
            where: {
                id: req.params.id
            }
        })

        if(note){
            note.title = req.body.title
            note.body = req.body.body
            await note.save()
            res.json({
                success: true,
                note,
            })
        } else {
            throw 'Note not found'
        }
    } catch (error) {
        next(error)
    }
}

module.exports = updateNoteHandler;
