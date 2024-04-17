import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);

const projectSchema = Schema({
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
