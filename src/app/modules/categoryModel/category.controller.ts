import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service";
import categoryValidationSchema from "./category.validation";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = req.body;

    // validation using zod
    const zodParserData = categoryValidationSchema.parse(category);

    const result = await categoryService.createCategoryIntoDb(zodParserData);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
export const CategoryController = {
  createCategory,
};
