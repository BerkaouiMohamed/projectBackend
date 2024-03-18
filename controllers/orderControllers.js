const asyncWrapper = require('../middelwares/asnycWrapper')
const orderModel=require('../models/orderModel')




const getAllOrdersController=asyncWrapper(async(req,res)=>{
const orders=await orderModel.find().populate({path:"products.product",model:"product"})
    res.json({status:"success",data:orders})
}


)
const getUserOrdersController=asyncWrapper(async(req,res)=>{
  const orders=await orderModel.find({user:req.decoded._id}).populate({path:"products.product",model:"product"})
      res.json({status:"success",data:orders})
  }
  
  
  )
  

const newOrderController=asyncWrapper(async(req,res)=>{
    const newOrder=await orderModel.create(req.body)
  
  res.json({status:"success",data:newOrder}) 
  
  })
const editOrderController=asyncWrapper(async(req,res)=>{
    const editedOrder=await orderModel.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:"success",data:editedOrder})
  
  }
)
  const deleteOrderController=asyncWrapper(async(req,res)=>{
  const deletedOrder=await orderModel.findOneAndDelete({_id:req.params.id})
     res.json({status:"success",data:deletedOrder})

   })



module.exports={
    getAllOrdersController,
    editOrderController,
    newOrderController,
    deleteOrderController,
    getUserOrdersController

}