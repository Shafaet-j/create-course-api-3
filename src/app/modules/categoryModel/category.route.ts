import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/api/categories", CategoryController.createCategory);

export const CategoryRoutes = router;
