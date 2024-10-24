const admin_middleware=async(req,res,next)=>{
    try {
        const isAdmin=req.user.isAdmin;
        if(!isAdmin){
            return res.status(400).json({msg:"Access denied : you are not admin"})
        }
        next();
    } catch (error) {
        next(error)
    }
}
module.exports=admin_middleware;