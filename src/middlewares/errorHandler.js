const sendResponse = require('../utils/responseHandler');

const errorHandler = (err, req, res, next) => {
  // Se for um erro que nós mesmos criamos (ex: e-mail duplicado)
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erro interno no servidor";

  // Exibe o erro no terminal para você conseguir debugar
  console.error(`[ERROR]: ${message}`);

  // Envia a resposta padronizada conforme o seu README
  return sendResponse(res, statusCode, false, message, null);
};

module.exports = errorHandler;