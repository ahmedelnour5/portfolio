import asyncHandler from "express-async-handler";
import Skills from "../models/skillsModel";

const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skills.find();
  if (skills) {
    res.status(200).json(skills);
  }
});

export default getSkills;
