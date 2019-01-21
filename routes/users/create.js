const models = require('../../models/index');

async function createUser(req, res, next) {
    try {
        const user = await models.user.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })

        res.json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

module.exports = createUser;
