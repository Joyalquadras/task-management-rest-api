import User from "../models/user.js"

export const userRegisterSchema={
    email:{
        exists:{
            errorMessage:'email field is required'
        },
        notEmpty:{
            errorMessage:'email can not be empty'
        },
        isEmail:{
                 errorMessage:'email should be valid format'
        },
        trim:true,
        normalizeEmail:true,
        custom:{
            options:async function(value){
                try{
                   const user=await User.findOne({email : value}) 
                    if(user) {
                        throw new Error(' Email alreday taken')
                    }
                }
                catch(err){
                    throw new Error(err.message)
                }
                return true;
            }

        }
    },
    password:{
        exists: {
            errorMessage:'Password field is required'
        },
        notEmpty: {
            errorMessage:'Password can not be empty'
        },
        isStrongPassword: {
            options:{
                minLength:8,
                minLowercase:1,
                minUppercase:1,
                minNumber:1,
                minSymbol:1
            },
            errorMessage: 'Password must contains atleast one lowercase ,one uppercase,one symbol,one number and it must be 8 cahracters long'

        },
        trim:true

    }
} 

export const userLoginSchema = {
    email: {
        exists: {
            errorMessage: 'email field is required'
        },
        notEmpty: {
            errorMessage: 'email can not be empty'
        },
        isEmail: {
            errorMessage: 'email should be valid format'
        },
        trim: true,
        normalizeEmail: true,
    },

    password: {
        exists: {
            errorMessage: 'Password field is required'
        },

        notEmpty: {
            errorMessage: 'Password can not be empty'
        },

        isLength: {
            options: { min: 6 },
            errorMessage: 'Password must be atleast 6 characters long'
        },

        trim: true
    }
}