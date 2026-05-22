import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    
    name: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    loginCount: {
        type: Number,
        default: 0
    },
    role:{
        type:String,
        enum:['admin','user','manager'],
        default:'user'
    }

}, {
    timestamps: true
});

const User = model("User", userSchema);

export default User;