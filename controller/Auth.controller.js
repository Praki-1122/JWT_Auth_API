import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CreateError } from '../utils/Error.js';
import { CreateSuccess } from '../utils/Success.js';
import Role from '../models/Role_Type.js';
import cookieParser from 'cookie-parser';


export const Login = async (req, res, next) => {
try {
    const user = await Users.findOne({
        UserName : req.body.UserName
    });
        if (!user) 
        {
            return next(CreateError(404,"Invalid User Name"));
        }

        const validPassword = await bcrypt.compare(req.body.Password, user.Password );
        if (!validPassword) {
            return next(CreateError(400 ,"Invalid Password"));
        }

    const roles = await Role.findOne({"_id" : {$in : user.Roles}});
    //token generation   
    const token  = jwt.sign({
            "id" : user._id,
            'UserName' : user.UserName,
            'isAdmin' : user.isAdmin,
            'FirstName' : user.FirstName,
            'LastName' : user.LastName,
            'UserRole' : roles,

        },
        process.env.JWT_SECRET_KEY
    );
    res.cookie("jwtToken",token,{httpOnly : true}); //- optional to add in cookie 
    res.status(200)
    .json({
        status : 200 , 
        message : "Login Successful",
        jwttoken : token
    });
   // return next(CreateSuccess( 200,"Login Successful"));
    } 
    catch (error) 
    {
        console.log(error)  
}
}


export const resetPassword = async (req,res)=> {
try {
    
} catch (error) {
    console.log(error)
}
}
