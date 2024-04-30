import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const experienceSchema = new mongoose.Schema({
  organization: String,
  title: String,
  position: String,
  dates: String,
  location: String,
  description: [String],
});

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
