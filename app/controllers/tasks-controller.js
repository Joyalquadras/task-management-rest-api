import Task from "../models/task.js";

//// GET ALL TASKS OF LOGGED-IN USER
export const listAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({userId:req.userId});
        res.status(200).json({ count: tasks.length, data: tasks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const addTasks = async (req, res) => {
    const { title, description, status, priority } = req.body;
    const task = new Task({ title, description, status, priority,userId: req.userId
 });
    try {
        const taskRecord = await task.save();
        res.status(201).json(taskRecord);
    } catch (err) {
        res.status(500).json({
   error: err.message
});
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({userId:req.userId,_id:id});
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findOneAndDelete({ userId: req.userId, _id: id });
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted successfully", data: deletedTask });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;
        const updatedTask = await Task.findOneAndUpdate({userId:req.userId,_id:id}
            ,
            { title, description, status, priority },
            { new: true, runValidators: true }
        );
        if (!updatedTask) return res.status(404).json({ message: "Task not found" });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
