import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { CourseRoutes } from "./app/modules/courseModel/course.route";
import { CategoryRoutes } from "./app/modules/categoryModel/category.route";
import { ReviewRoutes } from "./app/modules/reviewModel/review.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", CourseRoutes);
app.use("/", CategoryRoutes);
app.use("/", ReviewRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Im shafaet hossen");
});

app.use(globalErrorHandler);

export default app;
