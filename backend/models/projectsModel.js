import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectTitle: String,
  projectType: String,
  role: String,
  dates: String,
  technologies: [String],
  projectLink: String,
  description: [String],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
