const adminOnly=(req,res,next)=>{
    if(req.role!=='admin'){
        res.status(403).json({error:'you dont have permission to access this'})
    }
next();
}
export default adminOnly;