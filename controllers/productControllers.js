const asyncWrapper = require("../middelwares/asnycWrapper")
const productModel = require("../models/productModel")




const getProductsController=asyncWrapper(async(req,res)=>{
    const products= await productModel.find()
    res.json({status:'success',data:products})
   })

const newProductController=asyncWrapper(async(req,res)=>{
    const newProduct=await productModel.create(req.body)
  
  res.json({status:"success",data:newProduct}) 
  
  })
const editProductController=asyncWrapper(async(req,res)=>{
    const editedProd=await productModel.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:"success",data:editedProd})
  
  })
  const getSingleProductsController=asyncWrapper(async(req,res)=>{
    const prod=await productModel.findById(req.params.id)
    res.json({status:"success",data:prod})
  
  })

  const deleteProductController=asyncWrapper(async(req,res)=>{
  const editedProd=await productModel.findOneAndDelete({_id:req.params.id})
     res.json({status:"success",data:editedProd})

   })


   module.exports={
    getProductsController,
    newProductController,editProductController,deleteProductController,getSingleProductsController}