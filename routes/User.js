import express from 'express'
import { CreateUser, DeleteUser, GetUsers, UpdateUser } from '../controller/Users.controller.js';
const userRouter = express.Router()

userRouter.get('/Get', GetUsers);

userRouter.post('/CreateUser', CreateUser);
userRouter.put('/UpdateUser/:id', UpdateUser);
userRouter.delete('/DeleteUser/:id', DeleteUser);


export default userRouter;

