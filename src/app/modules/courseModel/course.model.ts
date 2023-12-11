import { Schema, Types, model } from "mongoose";
import { TCourse, TDetails, TTags } from "./course.interface";

const tagSchema = new Schema<TTags>({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, required: true },
});

const detailsSchema = new Schema<TDetails>({
  level: { type: String, required: true },
  description: { type: String, required: true },
});
const coureSchema = new Schema<TCourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  price: { type: Number, required: true },
  tags: { type: [tagSchema], required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number, required: true },
  details: { type: detailsSchema, required: true },
});

export const Course = model<TCourse>("Course", coureSchema);
