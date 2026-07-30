import express from 'express'
import { CreateAdmin, CreateUser, DeleteUser, GetById, GetUsers, UpdateUser } from '../controller/Users.controller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/VerifyToken.js';
const userRouter = express.Router()

userRouter.get('/GetAll', verifyToken,verifyAdmin, GetUsers);

userRouter.get('/GetUser/:id', verifyToken,verifyUser, GetById);

//User Create , edit 
userRouter.post('/CreateUser', CreateUser);
userRouter.put('/UpdateUser/:id', UpdateUser);
userRouter.delete('/DeleteUser/:id', DeleteUser);
//Admin User Create
userRouter.post('/registerAdmin', CreateAdmin);
export default userRouter;

