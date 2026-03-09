const enrollmentService = require('../services/enrollmentService');
const sendResponse = require('../utils/responseHandler');

class EnrollmentController {
  async create(req, res) {
    try {
      const { userId, courseId } = req.body;
      const enrollment = await enrollmentService.execute(userId, courseId);
      return sendResponse(res, 201, true, "Matrícula realizada com sucesso", enrollment);
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 409;
      return sendResponse(res, status, false, error.message);
    }
  }
}

module.exports = new EnrollmentController();