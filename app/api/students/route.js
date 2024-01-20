import { NextRequest, NextResponse } from "next/server";
import {
  getAllStudents,
  createStudent,
  updateStudentById,
  deleteStudentById,
} from "../../../controllers/studentController";

export const GET = async (req, res) => {
  try {
    const students = await getAllStudents();
    return NextResponse.json(students);
  } catch (err) {
    return NextResponse.json(err);
  }
};

export const POST = async (req, res) => {
  try {
    const student = await createStudent(req.body);
    return NextResponse.json(student);
  } catch (err) {
    return NextResponse.json(err);
  }
};

export const PUT = async (req, res) => {
  try {
    const student = await updateStudentById(req.body);
    return NextResponse.json(student);
  } catch (err) {
    return NextResponse.json(err);
  }
};

export const DELETE = async (req, res) => {
  try {
    const student = await deleteStudentById(req.body);
    return NextResponse.json(student);
  } catch (err) {
    return NextResponse.json(err);
  }
};
