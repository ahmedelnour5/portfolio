import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);

const experienceSchema = Schema({
  organization: String,
  title: String,
  position: String,
  dates: String,
  location: String,
  description: [String],
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
