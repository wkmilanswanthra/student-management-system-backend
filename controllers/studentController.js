import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllStudents = async () => {
  try {
    const students = await prisma.student.findMany();
    return students;
  } catch (err) {
    return err;
  }
};

const getStudentById = async (req, res) => {};

const createStudent = async (req, res) => {};

const updateStudentById = async (req, res) => {};

const deleteStudentById = async (req, res) => {};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
