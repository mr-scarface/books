const express = require('express');

const v1Routes = express.Router();

const { bookRouter } = require('./book/routes');

v1Routes.use('/book', bookRouter);

module.exports = v1Routes;
