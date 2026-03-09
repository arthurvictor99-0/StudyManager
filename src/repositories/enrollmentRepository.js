const prisma = require('../lib/prisma');
class EnrollmentRepository {
  async findSpecific(userId, courseId) {
    return await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId: Number(userId), courseId: Number(courseId) } }
    });
  }
  async create(userId, courseId) {
    return await prisma.enrollment.create({ data: { userId: Number(userId), courseId: Number(courseId) } });
  }
}
module.exports = new EnrollmentRepository();