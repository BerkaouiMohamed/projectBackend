const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
     try{
          fn(req,res,next)
     }
     catch(e){
         return next(e)
     }}
 }


 module.exports=asyncWrapper