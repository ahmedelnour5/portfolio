import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
  technologyType: String,
  skills: [String],
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
