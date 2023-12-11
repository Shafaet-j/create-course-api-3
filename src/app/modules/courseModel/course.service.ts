import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDb = async (courseData: TCourse) => {
  const user = new Course(courseData);
  //   if (await user.isUserExist(userData.userId)) {
  //     throw new Error("User already exsits");
  //   }
  const result = await user.save();
  return result;
};
export const CourseService = {
  createCourseIntoDb,
};
