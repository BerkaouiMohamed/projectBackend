const userModel = require("../models/userModel");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const asyncWrapper = require("../middelwares/asnycWrapper");
const {validationResult}=require('express-validator')

const loginController=asyncWrapper(async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.json("user not found");
    } else {
      const test = await bcrypt.compare(req.body.password, user.password);
      if (!test) {
        res.json("user not found");
      } else {
        
         const token = jwt.sign({_id:user._id,role:user.role},process.env.JWT_KEY,{expiresIn:"15m"})
         res.json({status:'success',data:{token,role:user.role,id:user._id}})
  
   
      }
    }
 
  })

const registerController=asyncWrapper(async (req, res,next) => {
  const result = validationResult(req);

if(result.isEmpty()){
    const user = await userModel.findOne({ email: req.body.email });
   if (!user) {  const { name, email, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const newUser = await userModel.create({
        name: name,
        email,
        password: hash,
      });
      res.json({status:"success",data:newUser});
   }
   else{
     next('user already exist')
   }
  }
  else{
     next('invalid mail')
  }}
)

  module.exports={
    loginController,
    registerController
  }