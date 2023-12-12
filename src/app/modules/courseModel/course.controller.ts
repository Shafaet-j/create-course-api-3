import { NextFunction, Request, Response } from "express";
import { CourseService } from "./course.service";
import sendResponse from "../../utils/sendResponds";
import httpStatus from "http-status";

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = req.body;

    const result = await CourseService.createCourseIntoDb(course);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Course created succesfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const CourseController = {
  createCourse,
};
