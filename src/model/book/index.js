const createError = require('http-errors');

const { fetchBooksQuery } = require('./query');
const BookSchema = require('./schema');

module.exports = class BookModel {
  constructor({ mongoDb }) {
    this.model = BookSchema(mongoDb);
  }

  async create(bookObject) {
    try {
      const book = await this.model.create(bookObject);
      return book;
    } catch (error) {
      if (error.code === 11000) {
        throw createError(409, 'Title already exists', { meta: { bookObject } });
      }
      error.meta = { ...error.meta, 'BookModel.create': { bookObject } };
      throw error;
    }
  }

  async update(bookId, updateObject) {
    try {
      const book = await this.model.findByIdAndUpdate(bookId, updateObject, { new: true, lean: true });

      return book;
    } catch (error) {
      if (error.code === 11000) {
        throw createError(409, 'Title already exists', { meta: { updateObject } });
      }
      error.meta = { ...error.meta, 'BookModel.update': { bookId, updateObject } };
      throw error;
    }
  }

  async delete(bookId) {
    try {
      const deleted = await this.model.deleteOne({ _id: bookId });

      return deleted;
    } catch (error) {
      error.meta = { ...error.meta, 'BookModel.delete': { bookId } };
      throw error;
    }
  }

  async read(bookId) {
    try {
      const book = await this.model.findById(bookId);

      return book;
    } catch (error) {
      error.meta = { ...error.meta, 'BookModel.read': { bookId } };
      throw error;
    }
  }

  async viewAll({ pageNumber, limit }) {
    try {
      const query = fetchBooksQuery({ pageNumber, limit });

      const books = (await this.model.aggregate(query).allowDiskUse(true).exec())[0];

      return books;
    } catch (error) {
      error.meta = { ...error.meta, 'BookModel.readAll': { pageNumber, limit } };
      throw error;
    }
  }
};
