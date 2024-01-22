import { PrismaClient } from "@prisma/client";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
} from "../controllers/studentController";

describe("API Tests", () => {
  let prismaMock;

  beforeAll(() => {
    prismaMock = new PrismaClient();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getAllStudents", () => {
    it("should return all students", async () => {
      const students = await getAllStudents();

      expect(students).toHaveLength(8);
    });
  });
});
