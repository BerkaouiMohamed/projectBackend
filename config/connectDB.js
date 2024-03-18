const { default: mongoose } = require("mongoose");

function connectDB(){
    mongoose
  .connect(process.env.DBURI, { dbName: "finalproject" })
  .then(() => console.log("connected to db"));
}

module.exports=connectDB 