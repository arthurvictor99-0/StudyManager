const prisma = require('../lib/prisma');
class CourseRepository {
  async findAll() { return await prisma.course.findMany(); }
  async findById(id) { return await prisma.course.findUnique({ where: { id: Number(id) } }); }
  async create(data) { return await prisma.course.create({ data }); }
}
module.exports = new CourseRepository();