
const verifyAdmin=(req,res,next)=>{
    const decoded=req.decoded
    if(decoded.role==="admin")next()
    else{
return res.json('you must be admin')
}

}
module.exports=verifyAdmin