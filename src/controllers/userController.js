const userService = require('../services/userService');
const sendResponse = require('../utils/responseHandler');

class UserController {
  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      return sendResponse(res, 201, true, "User created successfully", user);
    } catch (error) {
      return sendResponse(res, 400, false, error.message);
    }
  }

  async list(req, res) {
    try {
      const users = await userService.getAllUsers();
      return sendResponse(res, 200, true, "Users retrieved", users);
    } catch (error) {
      return sendResponse(res, 500, false, "Internal server error");
    }
  }

  async show(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      return sendResponse(res, 200, true, "User found", user);
    } catch (error) {
      return sendResponse(res, 404, false, error.message);
    }
  }

  // ... (Repetir padrão para Update e Delete)
}

module.exports = new UserController();