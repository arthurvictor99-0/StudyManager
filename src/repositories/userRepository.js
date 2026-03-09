const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepository {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id) {
    return await prisma.user.findUnique({ where: { id: Number(id) } });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async create(data) {
    return await prisma.user.create({ data });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id: Number(id) },
      data
    });
  }

  async delete(id) {
    return await prisma.user.delete({ where: { id: Number(id) } });
  }

  // Especial para a Parte 2 - Item 6 (Consulta Relacional)
  async findUserCourses(id) {
    return await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        enrollments: {
          include: { course: true }
        }
      }
    });
  }
}

module.exports = new UserRepository();