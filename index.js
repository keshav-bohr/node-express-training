const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routeHandler = require('./routes/index');

app.use(bodyParser.json());

app.use('/api', routeHandler);

app.use((error, req, res, next) => {
    res.json({
        error: error
    })
})

app.listen(2000, () => {
    console.log('server started')
});
