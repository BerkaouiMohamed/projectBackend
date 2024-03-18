//requirments
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const productRouter = require("./routers/productRouter");
const authRouter = require("./routers/authRouter");
const orderRouter = require("./routers/orderRouter");
const app = express();
const cors=require('cors')
//parser middelware
app.use(express.json());
//mongoose config
app.use(cors( ))
//Db connecttion
connectDB();
//end points
//register end point

app.use("/api/auth", authRouter);

app.use("/api/products", productRouter);
app.use("/api/order", orderRouter);
app.all("*", (req, res) => {
  res.status(404).json({ status: "fail", data: null });
});

app.use((error, req, res,next) => {
  res.json({ status: "error", data: error });
});
app.listen(5000, () => console.log("server runnuing on port 5000"));
