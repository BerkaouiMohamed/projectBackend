const express=require('express')
const { getProductsController, newProductController, editProductController, deleteProductController ,getSingleProductsController} = require('../controllers/productControllers')
const verifyJWT = require('../middelwares/verifyJWT')
const verifyAdmin = require('../middelwares/verifyAdmin')



const productRouter=express.Router()


productRouter.get('/',getProductsController)

productRouter.post('/',verifyJWT,verifyAdmin,newProductController)

productRouter.get('/:id',getSingleProductsController)

productRouter.put('/:id',editProductController)
productRouter.delete('/:id',deleteProductController)

module.exports=productRouter
