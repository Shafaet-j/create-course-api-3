import { z } from "zod";
const tagValidationSchema = z.object({
  name: z.string().min(1).max(255),
  isDeleted: z.boolean(),
});

const detailsValidationSchema = z.object({
  level: z.string(),
  description: z.string(),
});

const courseValidationSchema = z.object({
  title: z.string().min(1),
  instructor: z.string().min(1),
  // categoryId:z.o
  price: z.number(),
  tags: z.array(tagValidationSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationInWeeks: z.number(),
  details: detailsValidationSchema,
});
export default courseValidationSchema;
