import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDb = async (categoryData: TCategory) => {
  const category = new Category(categoryData);

  const result = await category.save();
  return result;
};
export const categoryService = {
  createCategoryIntoDb,
};
