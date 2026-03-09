const userRepository = require('../repositories/userRepository');
const courseRepository = require('../repositories/courseRepository');
const enrollmentRepository = require('../repositories/enrollmentRepository');

class EnrollmentService {
  async execute(userId, courseId) {
    const userExists = await userRepository.findById(userId);
    if (!userExists) throw new Error("Usuário não encontrado");

    const courseExists = await courseRepository.findById(courseId);
    if (!courseExists) throw new Error("Curso não encontrado");

    const alreadyEnrolled = await enrollmentRepository.findSpecific(userId, courseId);
    if (alreadyEnrolled) throw new Error("Usuário já matriculado neste curso");

    return await enrollmentRepository.create(userId, courseId);
  }
}

module.exports = new EnrollmentService();