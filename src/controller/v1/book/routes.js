const express = require('express');
const bookRouter = express.Router();

const book = require('./book');

bookRouter.get('/', book.viewAll);

bookRouter.post('/', book.create);

bookRouter.get('/:id', book.read);

bookRouter.patch('/:id', book.update);

bookRouter.delete('/:id', book.delete);

module.exports = { bookRouter };
