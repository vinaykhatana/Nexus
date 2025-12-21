import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, default: "New" }
});

export default mongoose.model("Lead", leadSchema);
