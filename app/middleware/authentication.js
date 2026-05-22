import jwt from 'jsonwebtoken'
export default function authenticateUser(req,res,next){
    const token=req.headers['authorization']
    if(!token){
        return res.status(401).json('token is required');
    }
    try {
        const tokenData=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=tokenData.userId
        req.role=tokenData.role
        next()
    } catch (error) {
        return res.status(401).json({errors:error.message})
        
    }
}