import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        require:[true,'title should noot be empty'],
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['Pending','In Progress','Completed']
    },
    priority:{
        type:String,
        enum:['Low','Medium','High']
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Task=mongoose.model('Task',taskSchema);

export default Task;