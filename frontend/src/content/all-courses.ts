import { domesticCourses } from "./courses-domestic";
import { internationalCourses } from "./courses-international";

export const allCourses = [...domesticCourses, ...internationalCourses];
