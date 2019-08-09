import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  code: String,
  description: String,
  jobType: String,
  date: String,
  courses: [String]
});

export default mongoose.model("Offer", offerSchema);
