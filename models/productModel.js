const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: String,
  },
  { versionKey: false }
);

const productModel = new mongoose.model("product", productSchema);

module.exports = productModel;
