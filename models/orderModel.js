const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    
    products:[{product:{type:mongoose.Schema.Types.ObjectId,ref:"product"},quantity:Number,_id:false}] ,
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    status:{type:String,enum:['pending','delevred',"cancelled"],default:'pending'},
    total:Number,

  },
  { versionKey: false }
);

{


}

const orderModel = new mongoose.model("order", orderSchema);

module.exports = orderModel;
 


