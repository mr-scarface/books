const BookService = require('./book');
const { bookModel } = require('../model/models');

module.exports = {
  bookService: new BookService({ bookModel }),
};
