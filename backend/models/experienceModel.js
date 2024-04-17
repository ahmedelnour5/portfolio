import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
  organization: String,
  title: String,
  position: String,
  dates: String,
  location: String,
  description: [String],
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
