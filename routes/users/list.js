const models = require('../../models/index');


async function listUsers(req, res, next) {
    try {
        const users = await models.user.findAll({
            include: [
                {
                    model: models.todo
                }
            ]
        })

        res.json({
            success: true,
            users
        })
    } catch (error) {
        next(error)
    }
}

module.exports = listUsers;
