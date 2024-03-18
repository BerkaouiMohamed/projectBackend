const express=require('express')
const { getAllOrdersController, newOrderController, editOrderController, deleteOrderController, getUserOrdersController } = require('../controllers/orderControllers')
const verifyJWT = require('../middelwares/verifyJWT')
const verifyAdmin = require('../middelwares/verifyAdmin')



const orderRouter=express.Router()

orderRouter.get('/',verifyJWT,verifyAdmin,getAllOrdersController)
orderRouter.get('/user',verifyJWT,getUserOrdersController)


orderRouter.post('/',verifyJWT,newOrderController)


orderRouter.put('/:id',editOrderController)
orderRouter.delete('/:id',deleteOrderController)

module.exports=orderRouter