const express=require('express')
const { getProductsController, newProductController, editProductController, deleteProductController ,getSingleProductsController} = require('../controllers/productControllers')



const productRouter=express.Router()


productRouter.get('/',getProductsController)

productRouter.post('/',newProductController)

productRouter.get('/:id',getSingleProductsController)

productRouter.put('/:id',editProductController)
productRouter.delete('/:id',deleteProductController)

module.exports=productRouter