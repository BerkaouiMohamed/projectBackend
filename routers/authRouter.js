const express=require('express');
const { registerController, loginController } = require('../controllers/authControllers');
const {body}=require('express-validator')
const authRouter=express.Router()

const validation=()=>{
    return [body('email').isEmail(),body('name').isLength({min:1,max:20})]
}

authRouter.post("/register",validation(),registerController );

//login
authRouter.post("/login",loginController );


module.exports=authRouter