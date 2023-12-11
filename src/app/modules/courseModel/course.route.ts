import express from "express";
import { CourseController } from "./course.controller";

const router = express.Router();

router.post("/api/course", CourseController.createCourse);

export const CourseRoutes = router;
