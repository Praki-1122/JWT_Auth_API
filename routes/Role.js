import express from 'express'
import Role from "../models/Role_Type.js";
import { CreateRole, DeleteRole, GetRoles, UpdateRole } from '../controller/Role.controller.js';
const roleRouter = express.Router()


roleRouter.get('/Get',GetRoles )

roleRouter.post("/Create" ,CreateRole);


roleRouter.put('/Update/:id', UpdateRole );

roleRouter.delete('/delete/:id', DeleteRole)






export default roleRouter;









