const createError = require('http-errors');

module.exports = class BookService {
  constructor({ bookModel }) {
    this.bookModel = bookModel;
  }

  async validate(book) {
    try {
      if (!book.title) {
        throw createError(422, 'Title is required');
      }

      if (!book.author) {
        throw createError(422, 'Author is required');
      }

      if (!book.summary) {
        throw createError(422, 'Summary is required');
      }

      return true;
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.validate': { book } };
      throw error;
    }
  }

  async create(bookObject) {
    try {
      await this.validate(bookObject);

      const book = await this.bookModel.create(bookObject);

      return { book, message: 'Book is Created' };
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.create': { bookObject } };
      throw error;
    }
  }

  async update(bookId, updateObject) {
    try {
      const book = await this.bookModel.update(bookId, updateObject);

      if (!book) {
        throw createError(406, "Book doesn't exist");
      }

      return { book, message: 'Book is updated' };
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.update': { bookId, updateObject } };
      throw error;
    }
  }

  async delete(bookId) {
    try {
      const deleted = await this.bookModel.delete(bookId);

      if (!deleted.deletedCount) {
        throw createError(406, "Book doesn't exist");
      }

      return { message: 'Book is deleted' };
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.delete': { bookId } };
      throw error;
    }
  }

  async read(bookId) {
    try {
      const book = await this.bookModel.read(bookId);

      if (!book) {
        throw createError(406, "Book doesn't exist");
      }

      return { book, message: 'Book is fetched' };
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.read': { bookId } };
      throw error;
    }
  }

  async viewAll(readerData) {
    try {
      const books = await this.bookModel.viewAll(readerData);

      return { ...books, message: 'Fetched all books' };
    } catch (error) {
      error.meta = { ...error.meta, 'BookService.viewAll': { readerData } };
      throw error;
    }
  }
};
