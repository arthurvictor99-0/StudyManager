const sendResponse = require('../utils/responseHandler');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erro interno no servidor";

  console.error(`[ERROR]: ${message}`);

  return sendResponse(res, statusCode, false, message, null);
};

module.exports = errorHandler;