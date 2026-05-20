import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'; 
import { validationResult } from "express-validator";
const userController={};

userController.register=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body;
    try{
        const user=new User({email,password});
        const salt=await bcrypt.genSalt();
        const hash=await bcrypt.hash(password,salt);
        user.password=hash;
        await user.save()
        res.status(201).json({data:{email:user.email,_id:user._id},message:'User registered succesfully'})
    }
    catch(err){
        console.log(err);
        res.status(500).json('Something went wrong');
    }
}

userController.login=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()});
    }
   const {email , password}=req.body;
   try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json('Inavlid email or password');
        }
        const verified=await bcrypt.compare(password,user.password);
        if(!verified){
            return res.status(400).json('Inavlid email or password');
        }
        const tokenData={userId:user._id};
        const token=jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'7d'})
        res.json({token:token});
   }
   catch(err){
    console.log(err);
    res.status(500).json('Something went wrong');
   }
}
userController.profile=async(req,res)=>{
    //return the logged in user details
    try {
        const user=await User.findById(req.userId)
        res.json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({error:'Something went wrong'})  
    }
}

export default userController;
