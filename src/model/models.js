const { mongoDb } = require('../utils/mongoDb');

const BookModel = require('./book');

module.exports = {
  bookModel: new BookModel({ mongoDb }),
};
