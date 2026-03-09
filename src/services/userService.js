const userRepository = require('../repositories/userRepository');

class UserService {
  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async createUser(data) {
    const emailExists = await userRepository.findByEmail(data.email);
    if (emailExists) throw new Error("Email already registered");
    return await userRepository.create(data);
  }

  async updateUser(id, data) {
    await this.getUserById(id);
    return await userRepository.update(id, data);
  }

  async deleteUser(id) {
    await this.getUserById(id);
    return await userRepository.delete(id);
  }
}

module.exports = new UserService();