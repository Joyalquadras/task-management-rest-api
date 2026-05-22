import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';
import configureDB from './config/db.js';
import { checkSchema } from 'express-validator';
import { userRegisterSchema,userLoginSchema } from './app/validation/user.js';
import userController from './app/controllers/user-controller.js';
import authenticateUser from './app/middleware/authentication.js';
import adminOnly from './app/middleware/adminOnly.js';
import { listAllTasks, addTasks, getTaskById, deleteTaskById, updateTaskById } from './app/controllers/tasks-controller.js';
import { authorizeUser } from './app/middleware/authorizeUser.js';

const port = 3347;
const app = express();

app.use(cors());
app.use(express.json());

configureDB();
//task related api
app.get('/api/tasks',authenticateUser, listAllTasks);
app.post('/api/tasks', authenticateUser,addTasks);
app.get('/api/tasks/:id',authenticateUser, getTaskById);
app.delete('/api/tasks/:id',authenticateUser, deleteTaskById);
app.put('/api/tasks/:id',authenticateUser, updateTaskById);


//user related api
app.post('/api/users/register',checkSchema(userRegisterSchema),userController.register);
app.post('/api/users/login',checkSchema(userLoginSchema),userController.login);
app.get('/api/users/profile', authenticateUser, userController.profile)
app.get('/api/users', authenticateUser, authorizeUser(['admin', 'manager']), userController.list)
// app.get('/api/users/list', authenticateUser, adminOnly, userController.list)
app.get('/', (req, res) => {
    res.send('Welcome to Task Management Application');
});

app.listen(port, () => {
    console.log('Server is running on port 3347');
});