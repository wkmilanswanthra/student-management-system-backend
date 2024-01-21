import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllStudents = async () => {
  try {
    const students = await prisma.student.findMany();
    return students;
  } catch (err) {
    console.error("Error fetching all students:", err);
    throw new Error("Error fetching all students");
  }
};

const getStudentById = async (id) => {
  console.log(id);
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });
    return student;
  } catch (err) {
    console.error("Error fetching student by id:", err);
    throw new Error("Error fetching student by id");
  }
};

const createStudent = async (req) => {
  try {
    const student = await prisma.student.create({
      data: {
        firstName: req.firstName,
        lastName: req.lastName,
        dateOfBirth: req.dateOfBirth,
        email: req.email,
        phone: req.phone,
        address: req.address,
      },
    });
    return student;
  } catch (err) {
    console.error("Error creating student:", err);
    throw new Error("Error creating student");
  }
};

const updateStudentById = async (id, body) => {
  try {
    const student = await prisma.student.update({
      where: {
        id: Number(id),
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: body.dateOfBirth,
        email: body.email,
        phone: body.phone,
        address: body.address,
      },
    });
    return student;
  } catch (err) {
    console.error("Error updating student:", err);
    throw new Error("Error updating student");
  }
};

const deleteStudentById = async (id) => {
  try {
    const student = await prisma.student.delete({
      where: {
        id: Number(id),
      },
    });
    return student;
  } catch (err) {
    console.error("Error deleting student:", err);
    throw new Error("Error deleting student");
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
