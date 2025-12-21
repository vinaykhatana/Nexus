import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  active: Boolean
});

export default mongoose.model("Product", productSchema);
