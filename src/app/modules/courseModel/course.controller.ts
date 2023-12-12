import { NextFunction, Request, Response } from "express";
import { CourseService } from "./course.service";

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = req.body;

    const result = await CourseService.createCourseIntoDb(course);
    res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: result,
    });
  } catch (err: any) {
    // res.status(500).json({
    //   success: false,
    //   message: err.message || "course not found",
    //   error: {
    //     code: 404,
    //     description: "course not found!",
    //   },
    // });
    next(err);
  }
};

export const CourseController = {
  createCourse,
};
