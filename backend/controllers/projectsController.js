import asyncHandler from "express-async-handler";
import Project from "../models/projectsModel";

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  if (projects) {
    res.json(projects);
  }
});

export default getProjects;
