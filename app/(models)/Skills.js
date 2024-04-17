import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);

const skillsSchema = Schema({
  technologyType: String,
  skills: [String],
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
