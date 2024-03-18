const jwt=require('jsonwebtoken')
const verifyJWT=(req,res,next)=>{
    try{const token=req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, process.env.JWT_KEY);
if(decoded){
    req.decoded=decoded
    console.log(req.decoded);
    next()}
    }
    catch(e){
        res.status(401).json('invalid token')
    }
}
module.exports=verifyJWT