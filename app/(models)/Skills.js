import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const skillsSchema = new mongoose.Schema({
  technologyType: String,
  skills: [String],
});

const Skills = mongoose.models.Skills || mongoose.model("Skills", skillsSchema);

export default Skills;
