import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';


export const Login = async (req, res) => {
try {
    const user = await Users.findOne({
        UserName : req.body.UserName
    });

    if (!user) {
        return res.status(404).send("Invalid User Name");
    }
    const validPassword = await bcrypt.compare(req.body.Password, user.Password );
    if (!validPassword) {
        return res.status(401).send("Invalid Password");
    }
    return res.status(200).send("Login Successful");
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
