import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = req.body;

    // validation using zod
    //   const zodParserData = userValidationSchema.parse(user);

    const result = await categoryService.createCategoryIntoDb(category);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "user not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
export const CategoryController = {
  createCategory,
};
