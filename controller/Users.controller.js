
import Users from "../models/Users.js";
import Role from "../models/Role_Type.js"
import bcrypt from 'bcryptjs';
import { CreateError } from "../utils/Error.js";

export const GetUsers = async (req, res , next)=>{
    try {
        const users = await Users.find({});
        if(users != null)
            return res.status(200).json(users)
        else
            return res.status(200).send("No users")
    } catch (error) {
        console.log(error)
    }
}
export const GetById = async (req, res , next)=>{
    try {
        const user = await Users.find({_id : req.params.id});
        if(user != null)
            return res.status(200).json(user)
        else
            return next(CreateError(400,"User Not Found" ));
    } catch (error) {
        console.log(error)
    }
}
//for the Normal user creation
export const CreateUser = async (req , res, next)=>{
    try {
        const roleType = await Role.find({"RoleName" : 'User'});
        console.log(roleType)
        const salt =  await bcrypt.genSalt(10);
        const encryptedKey = await bcrypt.hash(req.body.Password , salt) ;
        const newUser = new Users ({
            "FirstName" : req.body.FirstName,
            "LastName" : req.body.LastName,
            "UserName" : req.body.UserName,
            "Email" : req.body.Email,
            "MobileNumber" :req.body.MobileNumber,
            "Password" : encryptedKey,
            //"isAdmin" : req.body.isAdmin,
            "Roles" : roleType           
        })
        await newUser.save();
        return res.status(200).send("User Registered")
         
    } catch (error) {
        console.log(error)
    }
}

//for the Admin user Creation 
export const CreateAdmin = async (req , res, next)=>{
    try {
        const roleType = await Role.find();
        console.log(roleType)
        const salt =  await bcrypt.genSalt(10);
        const encryptedKey = await bcrypt.hash(req.body.Password , salt) ;
        const newUser = new Users ({
            "FirstName" : req.body.FirstName,
            "LastName" : req.body.LastName,
            "UserName" : req.body.UserName,
            "Email" : req.body.Email,
            "MobileNumber" :req.body.MobileNumber,
            "Password" : encryptedKey,
            "isAdmin" : true,
            "Roles" : roleType           
        })
        await newUser.save();
        return res.status(200).send("Admin Registered")
         
    } catch (error) {
        console.log(error)
    }
}


export const UpdateUser = async (req , res , next)=>{
    try {
        
        const user = await Users.findById({'_id' : req.params.id});
        if(user != null)
       {
        console.log(user)
         const updateUser = new Users ({
            "FirstName" : req.body.firstName,
            "LastName" : req.body.lastName,
            "UserName" : req.body.userName,
            "Email" : req.body.email,
            "MobileNumber" :req.body.mobileNumber,
            "Password" : req.body.password,
            "isAdmin" : req.body.isAdmin
        })
         const newupdate = await Users.findByIdAndUpdate({'_id' : req.params.id},{$set : req.body},{ new: true });
        const user1 = await Users.findById({'_id' : req.params.id});
                console.log(user1)
        return res.status(200).send("User Updated")
        }
        else
        {
            console.log("User not Found");
        }
         
    } catch (error) {
        console.log(error)
    }
}


export const DeleteUser = async (req, res , next) =>{
    try {
        const user = await Users.findById({'_id' : req.params.id});
        if(user != null)
       {
        await Users.deleteOne({_id : req.params.id});
        return res.status(200).send("User Deleted")
        }
        else
        {
            console.log("User not Found");
        }
    } catch (error) {
        console.log(error)
    }
}



