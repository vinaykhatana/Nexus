import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  title: String,
  budget: Number,
  status: { type: String, default: "Active" },
  requiredNiche: String,
  minFollowers: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export default mongoose.model("Campaign", campaignSchema);
