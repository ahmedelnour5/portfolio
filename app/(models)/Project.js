import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
  projectTitle: String,
  projectType: String,
  role: String,
  dates: String,
  technologies: [String],
  projectLink: String,
  description: [String],
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
