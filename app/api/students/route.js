import { NextRequest, NextResponse } from "next/server";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
} from "../../../controllers/studentController";

const handleSuccessResponse = (data) => {
  return NextResponse.json({
    status: "success",
    data: data,
  });
};

const handleErrorResponse = (error) => {
  return NextResponse.json({
    status: "error",
    error: {
      message: error.message,
    },
  });
};

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    if (id) {
      const student = await getStudentById(id);
      return handleSuccessResponse(student);
    } else {
      const students = await getAllStudents();
      return handleSuccessResponse(students);
    }
  } catch (err) {
    return handleErrorResponse(err);
  }
};

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    const student = await createStudent(body);
    return handleSuccessResponse(student);
  } catch (err) {
    return handleErrorResponse(err);
  }
};

export const PUT = async (req, res) => {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const student = await updateStudentById(id, body);
    return handleSuccessResponse(student);
  } catch (err) {
    return handleErrorResponse(err);
  }
};

export const DELETE = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const student = await deleteStudentById(id);
    return handleSuccessResponse(student);
  } catch (err) {
    return handleErrorResponse(err);
  }
};
