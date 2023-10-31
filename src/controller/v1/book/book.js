const { response } = require('../../../error/response');
const { bookService } = require('../../../service/services');

module.exports = {
  create: async (req, res) => {
    try {
      const response = await bookService.create(req.body);

      res.status(200).send({ success: true, ...response });
    } catch (error) {
      res.status(error.status || 500).send(response(error));
    }
  },

  update: async (req, res) => {
    try {
      const response = await bookService.update(req.params.id, req.body);

      res.status(200).send({ success: true, ...response });
    } catch (error) {
      res.status(error.status || 500).send(response(error));
    }
  },

  delete: async (req, res) => {
    try {
      const response = await bookService.delete(req.params.id);

      res.status(200).send({ success: true, ...response });
    } catch (error) {
      res.status(error.status || 500).send(response(error));
    }
  },

  read: async (req, res) => {
    try {
      const response = await bookService.read(req.params.id);

      res.status(200).send({ success: true, ...response });
    } catch (error) {
      res.status(error.status || 500).send(response(error));
    }
  },

  viewAll: async (req, res) => {
    try {
      const response = await bookService.viewAll(req.body);

      res.status(200).send({ success: true, ...response });
    } catch (error) {
      res.status(error.status || 500).send(response(error));
    }
  },
};
