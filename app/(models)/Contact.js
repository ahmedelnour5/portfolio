import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
