import express from "express";

import { ReviewController } from "./review.controller";

const router = express.Router();

router.post("/api/reviews", ReviewController.createReview);

export const ReviewRoutes = router;
