const models = require('../../models/index');

async function deleteNoteHandler(req, res, next) {
    try {
        const note = await models.todo.findOne({
            where: {
                id: req.params.id
            }
        })

        if(note){
            await note.destroy()
            res.json({
                success: true
            })
        } else {
            throw 'Note does not exist'
        }
    } catch (error) {
        next(error)
    }
}

module.exports = deleteNoteHandler;
