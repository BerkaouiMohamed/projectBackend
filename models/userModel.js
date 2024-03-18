const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        default: "user",
      },
    },
    { versionKey: false }
  );
  
  const userModel = new mongoose.model("user", userSchema);
  
  module.exports=userModel