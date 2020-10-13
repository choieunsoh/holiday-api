const express = require('express');
const logger = require('./logger/logger');
const colors = require('./logger/colors');

const PORT = process.env.PORT || 8888;
const app = express();
app.get('/', (req, res) => {
    res.json({ "status": "OK"});
});

const server = app.listen(PORT, function () {
    logger.info(`Server is running on port ${PORT}`);
});